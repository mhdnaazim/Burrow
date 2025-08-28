import React from "react";
import './ShopSpan.css'

const ShopSpan = () => {
    return (
        <>
            <div className="shop-span-container">
                <div className="shop-span-video">
                    <video autoPlay muted loop playsInline src="https://cdn.shopify.com/videos/c/o/v/f9900ebb1c7e4dadaca69ab0a28dd1c7.mp4"></video>
                </div>
                <div className="shop-span-overlay">
                    <h3>COMFY SIT. BETTER SLEEP.</h3>
                    <p>Designed for those who want it all</p>
                    <h5>We took a real queen-sized mattress and turned it into the stylish sleeper sofa of your dreams.</h5>
                    <button>Shop Span</button>
                </div>
            </div>
        </>
    )
}

export default ShopSpan