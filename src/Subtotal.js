import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText= {
                (value) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>909</strong>
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
