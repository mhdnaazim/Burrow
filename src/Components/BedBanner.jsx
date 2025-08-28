import React from "react";
import './BedBanner.css'
import './SeatListing.css'

const BedBanner = () => {
    return(
        <>
            <div className="bed-banner-container">
                <p>Bedroom Furniture</p>
                <h5>The key to sound sleep? It all starts with a sturdy bed frame. Then, round it out with coordinating dressers, nightstands, and more.</h5>
            </div>
            <div className="seating-sections">
                <ul>
                    <li>Beds</li>
                    <li>Nightstands & Dressers</li>
                    <li>Mattresses</li>
                    <li>Sleeper Sofas</li>
                    <li>Sleep Kits</li>
                    <li>Bedding</li>
                </ul>
            </div>
        </>
    )
}

export default BedBanner