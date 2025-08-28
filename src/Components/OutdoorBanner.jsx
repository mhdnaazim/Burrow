import React from "react";
import './OutdoorBanner.css'
import './SeatingBanner.css'

const OutdoorBanner = () => {
    return (
        <>

            <div className="out-banner-container">
                <p>Outdoor Furniture</p>
                <h5>Modular seating, patio designs, and outdoor dining sets all made with durable, all-weather materials.</h5>
            </div>
            <div className="seating-sections">
                <ul>
                    <li>Sofa & Modular Seating</li>
                    <li>Chairs & Loungers</li>
                    <li>Coffee Tables</li>
                    <li>Dining Sets</li>
                    <li>Rugs</li>
                    <li>Seating Covers</li>
                </ul>
            </div>

        </>
    )
}


export default OutdoorBanner