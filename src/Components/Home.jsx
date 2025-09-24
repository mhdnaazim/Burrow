import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Smarter from "./Smarter";
import ShopSpan from "./shopSpan";
import Categories from "./Categories";
import Shipping from "./Shipping";
import Footer from "./Footer";
import { useStore } from "./Context/StoreContext";


const Home = () => {
    
    return (
        <>
            <Nav />
            <Banner />
            <Smarter />
            <ShopSpan />
            <Categories />
            <Shipping />
            <Footer />
        </>
    )
}

export default Home