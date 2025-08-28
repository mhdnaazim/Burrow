import React from "react";
import './DecorBanner.css'
import './SeatListing.css'

const DecorBanner = () => {
    return(
        <>
        <div className="decor-banner-container">
                <p>Rugs & Decor</p>
                <h5>Our accessories are both decorative and functional, from stylish yet soft pillows to incredibly convenient trays for your couch or ottoman.</h5>
            </div>
            <div className="seating-sections">
                <ul>
                    <li>Rugs</li>
                    <li>Lighting</li>
                    <li>Trays</li>
                    <li>Stools</li>
                    <li>Pillows</li>
                </ul>
            </div>
        </>
    )
}

export default DecorBanner