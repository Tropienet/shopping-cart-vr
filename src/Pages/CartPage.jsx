import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Components/RouteSwitch";
import { v4 as uuidv4 } from "uuid"
import CardProductCard from "../Components/CartProductCard";
import { Link } from "react-router-dom";

const CartPage = () => {
    const cart = useContext(CartContext)
    const products = [...new Set(cart)];
    const [productsQuantPrice, setProductsQuantPrice] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    function calculateQuantAndPrice() {
        let newArray = productsQuantPrice

        let unique = [];
        newArray.forEach(element=> {
            if(!unique.includes(element)) {
                unique.push(element)
            }
        })

        setProductsQuantPrice(unique)

        products.forEach(product => {
            let cartPriceTotal = 0;
            let obi = new Object()
            obi.name = product.name
            obi.quantity = 0
            obi.totalPrice = 0
            obi.src = "";
            cart.forEach(cartItem => {
                if(product==cartItem) {
                    obi.quantity += 1
                    obi.src = cartItem.src
                    obi.totalPrice += cartItem.price
                }
                cartPriceTotal += cartItem.price
            })
            newArray.push(obi);
            setTotalPrice(cartPriceTotal.toFixed(2))
        })
    }

    useEffect(() => {
        calculateQuantAndPrice();
    }, [])

    return (
        <div>
            <header>
                <Link to="/">Homepage</Link>
            </header>
            {productsQuantPrice.map(product => (
               <CardProductCard key={uuidv4()}
                                name={product.name}
                                quantity={product.quantity}
                                src={product.src}
                                totalPrice={product.totalPrice.toFixed(2)}
                                 />
            ))}
            <p>Total price: {totalPrice}</p>
        </div>
    )
}

export default CartPage;