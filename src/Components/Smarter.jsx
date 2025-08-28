import React from "react";
import './Smarter.css'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import s1 from '../assets/slide1.webp'
import s2 from '../assets/slide2.webp'
import s3 from '../assets/slide3.webp'
import s4 from '../assets/slide4.webp'
import s5 from '../assets/slide5.webp'
import s6 from '../assets/slide6.webp'
import s7 from '../assets/slide7.webp'
import s8 from '../assets/slide8.webp'
import s9 from '../assets/slide9.webp'

const Smarter = () => {

    const slider = [
        {
            id: 1,
            image: s1,
            name: "Nomad Sofa Sectional",
            price: "$1,758"
        },

        {
            id: 2,
            image: s2,
            name: "Span Sleeper Storage Sectional with Reversible Chaise",
            price: "$1,679 - $1,791"
        },

        {
            id: 3,
            image: s3,
            name: "Range 3-Piece Sofa",
            price: "$1,119 - $1,199"
        },

        {
            id: 4,
            image: s4,
            name: "Nomad Sofa",
            price: "$1,359"
        },

        {
            id: 5,
            image: s5,
            name: "Range 5-Piece Sectional Lounger",
            price: "$1,679 - $1,791"
        },

        {
            id: 6,
            image: s6,
            name: "Union 3-Seat Sofa",
            price: "$1,839"
        },

        {
            id: 7,
            image: s7,
            name: "Field 4-Piece Sectional Lounger",
            price: "$1,399 - $1,503"
        },

        {
            id: 8,
            image: s8,
            name: "Nomad Leather Sectional",
            price: "$2,638"
        },

        {
            id: 9,
            image: s9,
            name: "Opera Media Console",
            price: "$799"
        }

    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 3,
    }



    return (
        <>
            <div className="Smarter-container">
                <div className="smarter-head">
                    <h5>SMARTER BY DESIGN</h5>
                    <p>We make furniture that works harder, so you can live easier.</p>
                    <h6>Clever features. Lasting quality. Delivery in days—not months. Welcome to the new standard.</h6>
                </div>

                <div className="categories">
                    <div className="sofa"><p>Sofas & Sectionals</p></div>
                    <div className="seating"><p>Outdoor Seating</p></div>
                    <div className="dining"><p>Dining</p></div>
                    <div className="bedroom"><p>Bedroom</p></div>
                </div>

                <div className="slider">
                    {/* <div className="arrow-buttons">
                        <button>&lt;</button>
                        <button>&gt;</button>
                    </div> */}
                    <div className="slider-contents">
                        <h4>SHOP BY  CATEGORY</h4>
                        <p>Furniture Designed for modern life at home</p>
                        <h5>Clever furniture solutions to address everyday problems</h5>
                        <button>Shop Bestsellers</button>
                    </div>
                </div>

                <div className="smarter-video-container">
                    <div className="smarter-video">
                        <video autoPlay muted loop playsInline src="https://cdn.shopify.com/videos/c/o/v/3240fe5c299040ac8da725a65d9a8b29.mp4"></video>
                    </div>
                    <div className="smarter-contents">
                        <h2>When it comes to furniture, we rethought everything.</h2>
                        <p>How it’s built, how it ships, and how it fits into your life. Our modular designs arrive in cleverly designed, easy-to-assemble components that fit through even the tightest spaces. And they show up in days, not months. Because great design isn’t just how it looks — it’s how it works.</p>
                    </div>
                </div>

                <div className="rated-products">
                    <div className="rated-products-head">
                        <p>Shop our top rated products</p>
                    </div>

                    <Slider {...settings}>
                        {slider.map((item) => (
                            <div className="rated-products-container">
                                <div className="products-card">
                                    <img src={item.image}/>
                                    <p>{item.name}</p>
                                    <h5>{item.price}</h5>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div >
        </>
    )
}

export default Smarter