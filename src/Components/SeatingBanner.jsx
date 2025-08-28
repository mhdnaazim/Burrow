import React from "react";
import './SeatingBanner.css'

const SeatingBanner = () => {
    return (
        <>
            <div className="seating-banner-container">
                <p>Seating</p>
                <h5>Shop our full assortment of modular couch seating systems, from loveseats to large sectionals. Everything you see here can be set up in minutes.</h5>
            </div>
            <div className="seating-sections">
                <ul>
                    <li>Sofas & Sectionals</li>
                    <li>Loveseats</li>
                    <li>Corner Sectionals</li>
                    <li>U-Sectionals</li>
                    <li>Accent Chairs</li>
                    <li>Ottamans</li>
                </ul>
            </div>
        </>
    )
}

export default SeatingBanner