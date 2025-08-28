import React from 'react'
import './SeatListing.css'
import { Dining } from '../Products';
import { useStore } from './Context/StoreContext';
import { toast } from 'react-toastify';

const DiningListing = () => {
  const { cart, addToCart, incQuantity, decQuantity } = useStore()
  console.log(cart);

  return (
    <div className="seat-listing-container">
      <div className="section-head">
        <p>Dining Tables</p>
      </div>

      <div className="mapping">
        {Dining.map((item) => {
          const inCart = cart.find(cartItem => cartItem.name === item.name);
          return (
            <div className="seat-listing-card-container" key={item.name}>
              <div className="seat-listing-card">
                <img src={item.image} alt={item.name} />
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
          );
        })}
      </div>
    </div>
  )
}

export default DiningListing
