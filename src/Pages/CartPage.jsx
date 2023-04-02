import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Components/RouteSwitch";
import { v4 as uuidv4 } from "uuid"

const CartPage = () => {
    const cart = useContext(CartContext)
    const products = [...new Set(cart)];
    const [someProducts, setSomeProducts] = useState([])

    useEffect(() => {
        products.forEach(product => {
            let obi = new Object()
            obi.name = product.name
            obi.quantity = 0
            cart.forEach(cartItem => {
                if(product==cartItem) {
                    obi.quantity += 1
                }
            })
            let newArray = someProducts;
            newArray.push(obi);
            setSomeProducts(newArray)
        })
    })

    return (
        <div>
            <p>This is the cart Page</p>
            {cart.map(product => (
                <div key={uuidv4()}>
                    <p>{product.name}</p>
                </div>
            ))}
            <button onClick={() => console.log(someProducts)}>Click</button>
        </div>
    )
}

export default CartPage;