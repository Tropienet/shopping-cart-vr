import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Components/RouteSwitch";
import { v4 as uuidv4 } from "uuid"

const CartPage = () => {
    const cart = useContext(CartContext)



    return (
        <div>
            <p>This is the cart Page</p>
            {cart.map(product => (
                <div key={uuidv4()}>
                    <p>{product.name}</p>
                </div>
            ))}
        </div>
    )
}

export default CartPage;