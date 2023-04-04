import { useContext, useState } from "react"
import { CartContext } from "./RouteSwitch"


const CardProductCard = (props) => {
    const [quantity, setQuantity] = useState(props.quantity)
    const [price, setPrice] = useState(props.totalPrice)
    const [visible, setVisible] = useState(true)
    const cart = useContext(CartContext)

    function reduceQuantityPrice() {
        let tempQuant = quantity - 1;
        let tempPrice = price / quantity;
        tempPrice *= tempQuant;
        if(parseInt(tempQuant)>0){
            setQuantity(tempQuant);
            setPrice(tempPrice.toFixed(2))
            updateCart();
        }else if(tempQuant===0){
            setVisible(false)
        }
    }

    return (
        <>
        {visible && (
            <div className="product-card-cart">
                <img src={props.src}/>
                <p>Name: {props.name}</p>
                <p>Quantity: {quantity}</p>
                <p>Price: {price}</p>
                <button onClick={() => reduceQuantityPrice()}>Remove</button>
            </div>
        )}
        </>
    )
}

export default CardProductCard