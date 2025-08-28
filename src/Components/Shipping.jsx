import React from "react";
import './Shipping.css'
import ship from '../assets/ship.jpg'

const Shipping = () => {
    return (
        <>
            <div className="shipping-main-container">
                <div className="shipping-container">
                    <div className="shipping-left">
                        <img src={ship} alt="" />
                    </div>
                    <div className="shipping-right">
                        <h3>Fast, affordable shipping</h3>
                        <p>Unlike other furniture brands, we keep inventory on hand thanks to our modular design—so your order is delivered in days, not months. And it arrives in normal shipping boxes, not expensive freight.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shipping