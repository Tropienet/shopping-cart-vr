import React, { useContext } from "react"
import { CartContext } from "./RouteSwitch";

const ProductCard = (props) => {
    let cart = useContext(CartContext)

    function addItemToCart() {
        cart.push(props)
    }

    return (
        <div>
            <h2 className="product-name">{props.name}</h2>
            <img src={props.src}></img>
            <p className="set-abrv">{props.abrv}</p>
            <p className="price">${props.price}</p>
            <button className="add-btn" onClick={addItemToCart}>Add to cart</button>
        </div>
    )
}

export default ProductCard;