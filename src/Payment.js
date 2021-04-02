import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import axios from './axios';


function Payment() {
    const history = useHistory();
    const [{basket, user}, dispatch] = useStateValue();
    
    const [processing, setProcessing] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // generate special secret to charge customer whenever
        // the basket changes

        const getClientSecret = async() => {
            const response = await axios({
                method:"post",
                url:`/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log("the client secret is ", clientSecret)

    const handleSubmit = async(event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }
        ).then(({ paymentIntent }) => {
            // payment intent == payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type:"EMPTY_BASKET"
            })

            history.replace('/orders')
        })
    }

    const handleChange = event =>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Juja, Kiambu</p>
                        <p>Kenyatta Road</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                            key={item.id}
                            id= {item.id}
                            title= {item.title}
                            image= {item.image}
                            price= {item.price}
                            rating= {item.rating}
                            />

                        ))}

                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__pricing">
                                <CurrencyFormat
                                    renderText= {
                                        (value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousantSeparator={true}
                                    prefix={"Ksh "}
                                    />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p>: "Order Now"}</span>
                                </button>
                            </div>
                            {/* error message */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
