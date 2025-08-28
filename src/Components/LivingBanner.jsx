import React from "react";
import './LivingBanner.css'
import './SeatListing.css'

const LivingBanner = () => {
    return (
        <>
            <div className="living-banner-container">
                <p>Living Room Furniture</p>
                <h5>Your living room, reimagined—smart, stylish furniture built for modern living. Easy to assemble, endlessly adaptable, and always ready for what’s next.</h5>
            </div>
            <div className="seating-sections">
                <ul>
                    <li>Sofas & Sectionals</li>
                    <li>Sleeper Sofas</li>
                    <li>Chairs & Ottomans</li>
                    <li>Coffee & Side Tables</li>
                    <li>Credenzas & Media Storage</li>
                    <li>Book Cases</li>
                    <li>Rugs</li>
                </ul>
            </div>
        </>
    )
}

export default LivingBanner