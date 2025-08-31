import React, { createContext, useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create context
const StoreContext = createContext()

// Provider
export const StoreProvider = ({ children }) => {


  // Localstorage getitem
  const data = JSON.parse(localStorage.getItem("cart"))



  const [cart, setCart] = useState(data)

  const addToCart = (item, id) => {
    const existingItem = cart.find(citem => citem.name === item.name)
    if (existingItem) {
      setCart(prevCart => prevCart.map(citem =>
        citem.id === id
          ? { ...citem, quantity: citem.quantity + 1 }
          : citem
      )
      )
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  // Localstorage Setitem
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])



  const clearCart = () => {
    setCart([])
  }

  const incQuantity = (id) => {
    setCart(prevCart => prevCart.map(citem =>
      citem.id === id
        ? { ...citem, quantity: citem.quantity + 1 }
        : citem
    )
    )
  }

  const decQuantity = (id) => {
    setCart(prevCart => prevCart.map(citem =>
      citem.id === id
        ? { ...citem, quantity: citem.quantity - 1 }
        : citem
    )
      .filter(citem => citem.quantity > 0)
    )
  }


  return (
    <StoreContext.Provider value={{ cart, addToCart, incQuantity, decQuantity, clearCart }}>
      {children}
    </StoreContext.Provider>
  )
}

// Custom Hook
export const useStore = () => useContext(StoreContext)
