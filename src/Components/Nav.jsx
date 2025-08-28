import React, { useEffect, useState } from "react";
import './Nav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useStore } from "./Context/StoreContext";
import logo from '../assets/burrow-vector-logo.png'
import search from '../assets/search.png'
import profile from '../assets/profile.png'
import cartimg from '../assets/cart.png'
import menu from '../assets/menu.png'
import Cart from "./Cart";

const Nav = () => {
    const { cart } = useStore()
    const [isOpen, setIsopen] = useState(false)

    const closeCart = () => {
        setIsopen(false)
    }

    const cartSize = cart.length;

    return (
        <>
            <div className="navbar">
                <div className="FirstNav-container">
                    <div className="FirstNav-left">
                        <h5>New Arrivals ready for cozy Season. Shop our Fall preview </h5>
                        <p><FontAwesomeIcon icon={faArrowRight} className="arrow-icon" /></p>
                    </div>
                    <div className="FirstNav-right">
                        <ul>
                            <li>Free Swatches</li>
                            <li>Showrooms</li>
                        </ul>
                    </div>
                </div>
                <div className="nav-container">

                    <div className="Nav-left">
                        <div className="Nav-logo">
                            <img className="menu" src={menu} alt="" />
                            <Link to="/" className="home-link"> <img className="main-logo" src={logo} alt="" /> </Link>
                        </div>
                        <div className="Nav-links">
                            <ul>
                                <Link to="/seating" className="links"> <li>Seating</li> </Link>
                                <Link to="/bedroom" className="links"> <li>Bedroom</li> </Link>
                                <Link to="/office" className="links"> <li>Office</li> </Link>
                                <Link to="/outdoor" className="links"> <li>Outdoor</li> </Link>
                                <Link to="/living" className="links"> <li>Living</li> </Link>
                                <Link to="/dining" className="links"> <li>Dining</li> </Link>
                                <Link to="/rugs&decor" className="links"> <li>Rugs & Decor</li> </Link>
                                <Link to="/storage" className="links"> <li>Storage</li> </Link>
                                <Link to="/clearance" className="links"> <li>Clearance</li> </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="Nav-right">
                        <img className="search-img" src={search} alt="" />
                        <img className="profile-img" src={profile} alt="" />
                        <img onClick={() => setIsopen(true)} className="cart-img" src={cartimg} />
                        <div className="cart-count">
                            {cart.length > 0 ? (
                                <div className="quantity-count">
                                <p>{cartSize}</p>
                            </div> 
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                </div>


            </div>

            {isOpen &&
                <Cart close={closeCart} />
            }


        </>
    )
}

export default Nav