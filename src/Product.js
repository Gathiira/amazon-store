import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,title, image, price, rating}) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () =>{
        // dispatch the irem into data layer
        console.log("working");
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };
    return (
        <div key ={id} className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>Ksh</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) =>(
                        <p key={i}>⭐</p>
                    ))}
                </div>
            </div>
            <img className="product__image" src={image} alt="product" />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
