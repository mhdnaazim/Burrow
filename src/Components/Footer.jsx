import React from "react";
import './Footer.css'
import fb from '../assets/facebook-app-symbol (1).png'
import insta from '../assets/instagram (1).png'
import tiktok from '../assets/tik-tok.png'

const Footer = () => {
    return (
        <>
            <div className="footer-main-container">
                <div className="footer-container">
                    <div className="footer-top">
                        <div className="inputs-main">
                            <div className="inputs">
                                <input type="email" placeholder="Email address" />
                                <input type="text" placeholder="Phone Number" />
                            </div>
                            <button>SUBSCRIBE</button>
                            <p>By providing your phone number and/or email and clicking "SUBSCRIBE" above, you agree to receive recurring automated promotional messages from Burrow at the phone number and/or email used when signing up. Consent is not a condition of purchase. Msg frequency may vary. Text Msg & data rates may apply. Reply HELP for help and STOP to unsubscribe from texts.</p>
                            <h5>See <u>Terms and Conditions</u> & <u>Privacy Policy</u>.</h5>
                        </div>
                        <div className="social">
                            <a href="https://www.facebook.com/burrow"><img src={fb} /></a>
                            <a href="https://www.instagram.com/burrow/"><img src={insta} /></a>
                            <img src={tiktok} />
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-links">
                            <div className="links-container">
                                <p>Shopping Services</p>
                                <ul>
                                    <li>Schedule Consultation</li>
                                    <li>Showrooms</li>
                                    <li>Trade Program</li>
                                </ul>
                            </div>
                            <div className="links-container">
                                <p>About</p>
                                <ul>
                                    <li>Our Story</li>
                                    <li>Careers</li>
                                    <li>Patents</li>
                                </ul>
                            </div>
                            <div className="links-container">
                                <p>Resources</p>
                                <ul>
                                    <li>Returns</li>
                                    <li>Shipping & Delivery</li>
                                    <li>FAQ</li>
                                    <li>Refer A Friend</li>
                                </ul>
                            </div>
                            <div className="links-container">
                                <p>Our Brands</p>
                                <ul>
                                    <li>Interior Define</li>
                                    <li>The Inside</li>
                                    <li>The citizenry</li>
                                    <li>St.Frank</li>
                                </ul>
                            </div>
                            <div className="links-container">
                                <p>Contact Customer Experience</p>
                                <ul>
                                    <li>Email:suppport@burrow.com</li>
                                    <li>Hours:</li>
                                    <li>Monday to Friday:10a - 6p EST</li>
                                    <li>Saturday & Sunday: 10a - 2p EST</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bottom-terms">
                            <div className="footer-bottom-terms-top">
                                <h6>© 2025 Burrow</h6>
                                <p>15 W 27th Street, 10th Floor New York, NY, 10001</p>
                            </div>
                            <div className="footer-bottom-terms-bottom">
                                <p>Terms-Accessibility-Privacy-Your privacy choices-This site may collect, use, and disclose personal information. Please refer to our Privacy Policy for more information.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer