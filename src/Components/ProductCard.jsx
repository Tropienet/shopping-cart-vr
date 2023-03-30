import React from "react"

const ProductCard = (props) => {
    return (
        <div>
            <h2 className="product-name">{props.name}</h2>
            <img src={props.src}></img>
            <p className="set-abrv">{props.abrv}</p>
            <p className="price">${props.price}</p>
            <button className="add-btn">Add to cart</button>
        </div>
    )
}

export default ProductCard;