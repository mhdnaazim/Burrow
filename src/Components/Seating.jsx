import React from "react";
import SeatingBanner from "./SeatingBanner";
import Nav from "./Nav";
import SeatListing from "./SeatListing";

const Seating = () => {
    return(
        <>
        <Nav/>
        <SeatingBanner/>
        <SeatListing/>
        </>
    )
}

export default Seating