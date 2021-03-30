import React from 'react'
import './Basket.css'
import { useStateValue } from './StateProvider';

function Basket({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const RemoveFromBasket = () =>{
        // remove the item from data layer
        dispatch({
            type:"REMOVE_FROM_BASKET",
            item: {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };

    var basket_items = basket.map(function(val, index){
        return (
            <div key ={index} className="basket">
                <div className="basket__info">
                    <p>{val["title"]}</p>
                    <p className="basket__price">
                        <small>Ksh </small>
                        <strong>{val["price"]}</strong>
                    </p>
                    {/* <div className="basket__rating">
                        {Array(val["rating"]).fill().map((_,i) =>(
                            <p key={i}>⭐</p>
                        ))}
                    </div> */}
                </div>
                {/* <img className="basket__image" src={val["image"]} alt="basket" /> */}

                <button onClick={RemoveFromBasket}>Remove from Basket</button>
            </div>
        )
    })


    return (
        <>
        {basket_items}
        </>
    )
}
export default Basket
