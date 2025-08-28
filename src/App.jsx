import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Components/Home";
import Seating from "./Components/Seating";
import Bedroom from "./Components/Bedroom";
import Office from "./Components/Office";
import Outdoor from "./Components/Outdoor";
import Cart from "./Components/Cart";
import Living from "./Components/Living";
import Dining from "./Components/Dining";
import Decor from "./Components/Decor";
import Storage from "./Components/Storage";
import Clearance from "./Components/Clearance";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seating" element={<Seating />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/office" element={<Office />} />
          <Route path="/outdoor" element={<Outdoor />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/living" element={<Living />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/rugs&decor" element={<Decor />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/clearance" element={<Clearance />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={1800}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </BrowserRouter>
    </>
  )
}

export default App