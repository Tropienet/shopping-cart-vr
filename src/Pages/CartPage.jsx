import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Components/RouteSwitch";
import { v4 as uuidv4 } from "uuid"
import CardProductCard from "../Components/CartProductCard";

const CartPage = () => {
    const cart = useContext(CartContext)
    const products = [...new Set(cart)];
    const [productsQuantPrice, setProductsQuantPrice] = useState([])

    useEffect(() => {
        products.forEach(product => {
            let obi = new Object()
            obi.name = product.name
            obi.quantity = 0
            obi.totalPrice = 0
            cart.forEach(cartItem => {
                if(product==cartItem) {
                    obi.quantity += 1
                    obi.totalPrice += cartItem.price
                }
            })
            let newArray = productsQuantPrice;
            newArray.push(obi);
            setProductsQuantPrice(newArray)
        })
    }, [productsQuantPrice])

    return (
        <div>
            <p>This is the cart Page</p>
            {cart.map(product => (
               <CardProductCard key={uuidv4()}
                                name={product.name} />
            ))}
        </div>
    )
}

export default CartPage;