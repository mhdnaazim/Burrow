import React from "react";
import sofaSample from '../assets/out1.webp'
import './SeatListing.css'
import { Outdoor } from "../Products";
import { useStore } from "./Context/StoreContext";
import { toast } from "react-toastify";

const OutdoorListing = () => {

    const { cart, addToCart, incQuantity, decQuantity } = useStore();
    console.log(cart);

    return (
        <>
            <div className="seat-listing-container">
                <div className="section-head">
                    <p>Sofa & Modular Seating</p>
                </div>
                <div className="mapping">
                    {Outdoor.map((item) => {
                        const inCart = cart.find(cartItem => cartItem.name === item.name)
                        return (
                            <div className="seat-listing-card-container">
                                <div className="seat-listing-card">
                                    <img src={item.image} />
                                    <p>{item.name}</p>
                                    <h5>${item.price}</h5>

                                    {inCart ? (
                                        <div className="cart-buttons">
                                            <button onClick={() => decQuantity(item.id)}>-</button>
                                            <h6>{inCart.quantity}</h6>
                                            <button onClick={() => incQuantity(item.id)}>+</button>
                                        </div>
                                    ) : (
                                        <button className="atc-btn" onClick={() => { addToCart(item), toast.success("Item Added Successfully!"); }}
                                        >Add to Cart</button>)}

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default OutdoorListing