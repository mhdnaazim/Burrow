import React from "react";
import './DiningBanner.css'
import './SeatListing.css'

const DiningBanner = () => {
    return(
        <>
            <div className="dining-banner-container">
                <p>Dining Room Furniture</p>
                <h5>Our dining furniture brings sophisticated style and performance to everyday life, so you can enjoy five-star dining and be a regular all at once.</h5>
            </div>
            <div className="seating-sections">
                <ul>
                    <li>Dining Tables</li>
                    <li>Dining Chairs</li>
                    <li>Dining Stools</li>
                    <li>Bar Carts & Credenzas</li>
                    <li>Stacking Stools</li>
                    <li>Trays</li>
                </ul>
            </div>
        </>
    )
}

export default DiningBanner