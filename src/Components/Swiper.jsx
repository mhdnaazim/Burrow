import React from "react";
import swiper1 from "../assets/swiper1.avif";
import swiper2 from "../assets/swiper2.avif";
import swiper3 from "../assets/swiper3.avif";
import Slider from "react-slick";

const Swiper = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
    };

    const slides = [
        {
            id: 1,
            head: "DON'T JUST TAKE IT FROM US!",
            para: " 'I've rearranged the modular Range Sofa into multiple configurations over the years—a sofa, a chaise lounge, a bench, even a toddler bed—and its adaptability is great' ",
            image: swiper1,
            name: "Range Sofa",
        },
        {
            id: 2,
            head: "DON'T JUST TAKE IT FROM US!",
            para: "'It's supportive both in sitting and sleeping mode, and it'll make your overnight guests feel like royalty. We honestly can't stop bragging about it...'",
            image: swiper2,
            name: "Span Sleeper Sofa",
        },
        {
            id: 3,
            head: "DON'T JUST TAKE IT FROM US!",
            para: "'Burrow's Union sectional is too damn comfortable, with cushions that are deep and plush. It's a magnet for anyone looking to relax'",
            image: swiper3,
            name: "Union Sofa",
        },
    ];

    return (
        <div style={{
            width: "100%",
            margin: "0 auto"
        }}>
            <Slider {...settings}>
                {slides.map((item) => (
                    <div key={item.id}>
                        <div
                            style={{
                                height: "350px",
                                width: "85%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "20px",
                                background: "#f8f8f8",
                                gap: "20px",
                                margin: "0 7.5%"
                            }}
                        >
                            {/* Left side - Text */}
                            <div style={{ flex: 1 }}>
                                <h5 style={{ marginBottom: "10px" }}>{item.head}</h5>
                                <p style={{ fontSize: "14px", lineHeight: "1.5" }}>{item.para}</p>
                            </div>

                            {/* Right side - Image + Name */}
                            <div style={{ flex: "0 0 300px", textAlign: "center" }}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{ height: "250px", width: "400px", borderRadius: "8px" }}
                                />
                                <p style={{ marginTop: "10px", fontWeight: "500", textDecoration: "underline" }}>{item.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Swiper;
