import { useContext } from "react";
import { CartContext } from "../Components/RouteSwitch";

const CartPage = () => {
    const cart = useContext(CartContext)

    return (
        <div>
            <p>This is the cart Page</p>
        </div>
    )
}

export default CartPage;