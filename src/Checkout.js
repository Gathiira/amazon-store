import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className="checkout__ad"
                src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png" 
                alt="" />

                <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>

                    {/* backet items */}
                    {/* backet items */}
                    {/* backet items */}
                    {/* backet items */}
                </div>

            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout