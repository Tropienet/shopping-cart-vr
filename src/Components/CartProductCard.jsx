

const CardProductCard = (props) => {

    return (
        <div className="product-card-cart">
            <img src={props.src}/>
            <p>Name: {props.name}</p>
            <p>Quantity: {props.quantity}</p>
            <p>Price: {props.totalPrice}</p>
        </div>
    )
}

export default CardProductCard