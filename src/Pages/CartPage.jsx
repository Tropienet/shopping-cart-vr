import { useContext, useState } from "react";
import { CartContext } from "../Components/RouteSwitch";

const CartPage = () => {
    const cart = useContext(CartContext)
    const [products, setProducts] = useState([])

    function addProduct(productName) {
        let tempArray = products
        tempArray.push(productName)
        setProducts(tempArray)

        return (
            <span>{productName}</span>
        )
    }

    function getQuantity() {
        products.forEach(product => {
            let quantity = 0;
            cart.forEach(cartItem => {
                if(products.includes(cartItem)) {
                    quantity += 1
                }
            })
            return quantity
        })
    }

    return (
        <div>
            <p>This is the cart Page</p>
            {cart.map(product => (
                <div key={product.id}>
                    {products.includes(product.name)
                    ? <p>{product.name}</p>
                    : <p>{addProduct(product.name)} no</p>}
                </div>
            ))}

        </div>
    )
}

export default CartPage;