import React from "react";
import './Banner.css'
import { sofas } from "../Products";
import { Link } from "react-router-dom";

const Banner = () => {
    return(
        <>
            <div className="banner-container">
                <div className="main-head-container">
                    <h4>THE CLEARANCE SALE</h4>
                    <p>70% Off on our Clearance</p>
                    <h5>Soak up the last days of summer with sitewide savings, for a limited time only.</h5>
                    <Link to="/clearance"> <button>SHOP NOW</button> </Link>
                </div>
            </div>
        </>
    )
}

export default Banner