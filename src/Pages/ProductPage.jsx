import ProductCard from "../Components/ProductCard"
import products from "../Common/products"
import { useContext, useEffect, useState } from "react"
import  { Link } from "react-router-dom"
import "../Layouts/ProductPageLayout.css"

const ProductPage = () => {
    const [productArray, setProductArray] = useState([])

    function loadProducts() {
        setProductArray(products)
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <div className="product-page-container">
            <header>
                <Link to="/cart">Cart</Link>
            </header>
            <div className="product-container">
                {productArray.map(product => (
                    <ProductCard    name={product.name}
                                    src={product.src}
                                    abrv={product.abrv}
                                    price={product.price}
                                    key={product.id}
                                    />
                ))}
            </div>
        </div>
    )
}

export default ProductPage