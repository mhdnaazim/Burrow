import React from 'react'
import './StorageBanner.css'
import './SeatingBanner.css'

const StorageBanner = () => {
    return (
        <>
            <div className="storage-banner-container">
                <p>Storage</p>
                <h5>From modular shelving systems to acoustically transparent media consoles designed for the latest electronics, we have a place to put your stuff.</h5>
            </div>
            <div className="seating-sections">
                <ul>
                    <li>Wall Shelves</li>
                    <li>Credenzas & Media Storage</li>
                    <li>Desks</li>
                    <li>Bookcases</li>
                    <li>Storage Benches</li>
                </ul>
            </div>
        </>
    )
}

export default StorageBanner
