import ProductCard from "../Components/ProductCard"
import products from "../Common/products"
import { useContext, useEffect, useState } from "react"
import  { Link } from "react-router-dom"

const ProductPage = () => {
    const [productArray, setProductArray] = useState([])

    function loadProducts() {
        setProductArray(products)
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <div className="product-container">
            <Link to="/cart">Cart</Link>
            {productArray.map(product => (
                <ProductCard    name={product.name}
                                src={product.src}
                                abrv={product.abrv}
                                price={product.price}
                                key={product.id}
                                />
            ))}
        </div>
    )
}

export default ProductPage