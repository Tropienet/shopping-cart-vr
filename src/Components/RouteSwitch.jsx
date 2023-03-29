import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductPage from "../Pages/ProductPage"
import CartPage from "../Pages/CartPage"

const RouteSwitch = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductPage />}></Route>
                <Route path="/cart" element={<CartPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;