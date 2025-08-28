import React, { useEffect, useRef, useState } from "react";
import './Cart.css'
import { useStore } from "./Context/StoreContext";
import { toast } from "react-toastify";

const Cart = ({ close }) => {
    const { cart, incQuantity, decQuantity, clearCart } = useStore()
    const [animate, setAnimate] = useState(false);
    const [showInvoice, setShowInvoice] = useState(false);
    const invoiceRef = useRef();

    // Trigger slide-in after mount
    useEffect(() => {
        setTimeout(() => setAnimate(true), 10);
    }, []);

    const handleClose = () => {
        setAnimate(false);
        setTimeout(() => close(), 350); // wait for animation before unmount
    };

    const subTotal = cart.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0)

    const handlePrint = () => {
        window.print()
    }

    return (
        <div className="cart-main-container" onClick={handleClose}>
            <div
                className={`cart-container ${animate ? "slide-in" : ""}`}
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
                <div className="cart-top">
                    <div className="cart-head">
                        <p>Cart</p>
                    </div>
                    <div className="cart-close">
                        <div className="close-btn" onClick={handleClose}>
                            <p>✕</p>
                        </div>
                    </div>
                </div>

                {/* Cart Items */}
                <div className="cart-list">
                    {cart.length === 0 || cart.every(item => item.quantity === 0) ? (
                        <div className="cart-empty">
                            <p>Your cart is empty!</p>
                        </div>
                    ) : (
                        cart.map((item) =>
                            item.quantity > 0 && (
                                <div className="cart-product-card" key={item.id}>
                                    <div className="cart-product-top">
                                        <div className="cart-product-top-left">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="cart-product-top-right">
                                            <p>{item.name}</p>
                                            <p>${item.price}</p>
                                        </div>
                                    </div>
                                    <div className="cart-product-bottom">
                                        <div className="cart-product-bottom-left">
                                            <p>In Stock! Ships in 2-5 days</p>
                                        </div>
                                        <div className="cart-product-bottom-right">
                                            <div className="counter">
                                                <button onClick={() => decQuantity(item.id)}>-</button>
                                                <p>{item.quantity}</p>
                                                <button onClick={() => incQuantity(item.id)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    )}
                </div>


                <div className="cart-foot">
                    <div className="cart-foot-top">
                        <h5>Sub-Total</h5>
                        <p>${subTotal}</p>
                    </div>
                    <div className="cart-foot-mid">
                        {cart.length > 0 ? (
                            <button onClick={() => {
                                setShowInvoice(true)
                            }}>
                                Checkout Now
                            </button>
                        ) : (
                            <button onClick={() => {
                                toast.error("No items in Cart");
                            }}>
                                Checkout Now
                            </button>
                        )}
                    </div>
                    <div className="cart-foot-bottom">
                        <p>Shipping and Discounts are all available at checkout</p>
                    </div>
                </div>
            </div>

            {/* Invoice  */}
            {showInvoice && (
                <div className="invoice">
                    <div className="invoice-content" ref={invoiceRef}>
                        <h2>Invoice</h2>
                        <p> <strong>Invoice ID:</strong> {Math.floor(Math.random() * 1000000)} </p>

                        <p> <strong>Date:</strong> {new Date().toLocaleDateString()} </p>

                        <table border="1" cellPadding="10" style={{ width: "100", marginTop: "10px", borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cart.map((item) => {
                                    return (
                                        item.quantity > 0 && (
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.price}</td>
                                                <td>{item.price * item.quantity}</td>
                                            </tr>
                                        )
                                    )
                                })}

                                <tr>
                                    <td colSpan="3"><strong>Grand Total</strong></td>
                                    <td><strong>${subTotal}</strong></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div className="invoice-actions">
                        <button onClick={() => {
                            handlePrint()
                            clearCart()
                        }}>Print</button>

                        {/* DONE = Download PDF + Clear Cart + Close Invoice */}
                        <button
                            onClick={async () => {
                                clearCart();
                                toast.success("Order Placed!");
                                const element = invoiceRef.current;
                                const canvas = await html2canvas(element);
                                const imgData = canvas.toDataURL("image/png");

                                const pdf = new jsPDF("p", "mm", "a4");
                                const pdfWidth = pdf.internal.pageSize.getWidth();
                                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

                                pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
                                pdf.save("invoice.pdf");
                                setShowInvoice(false);
                            }}
                        >
                            Proceed
                        </button>

                        <button onClick={() => setShowInvoice(false)}>Back</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart;
