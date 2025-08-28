import React from "react";
import './SeatingBanner.css'
import './OfficeBanner.css'

const OfficeBanner = () => {
    return(
        <>
        <div className="office-banner-container">
                <p>Home Office</p>
                <h5>Navigate the ups and downs of working from home with thoughtfully designed desks, stylish storage, and performance rugs for your home office.</h5>
            </div>
            <div className="seating-sections">
                <ul>
                    <li>Desks</li>
                    <li>Bookcases & Shelves</li>
                    <li>Credenzas & Media Storage</li>
                    <li>Sleeper Sofas</li>
                    <li>Rugs</li>
                </ul>
            </div>
        </>
    )
}

export default OfficeBanner