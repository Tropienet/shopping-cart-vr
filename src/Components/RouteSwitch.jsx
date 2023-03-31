import React, { createContext, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductPage from "../Pages/ProductPage"
import CartPage from "../Pages/CartPage"

const CartContext = createContext()

const RouteSwitch = () => {
    const [cart, setCart] = useState([])

    return(
        <CartContext.Provider value={cart}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductPage cart={cart}/>}></Route>
                    <Route path="/cart" element={<CartPage cart={cart} />}></Route>
                </Routes>
            </BrowserRouter>
        </CartContext.Provider>
    )
}

export {CartContext};
export default RouteSwitch;