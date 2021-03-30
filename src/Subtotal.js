import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    var total = 0

    var newArr = basket.map(function(val, index){
       return total += val['price']
    })

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText= {
                (value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>Ksh {total}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
            decimalScale={2}
            value={10292}
            displayType={"text"}
            thousantSeparator={true}
            prefix={"Ksh"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
