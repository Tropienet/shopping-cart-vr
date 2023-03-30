import ProductCard from "../Components/ProductCard"
import products from "../Common/products"
import { useEffect, useState } from "react"

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