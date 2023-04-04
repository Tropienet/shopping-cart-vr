

const CardProductCard = (props) => {

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.quantity}</p>
            <p>{props.totalPrice}</p>
        </div>
    )
}

export default CardProductCard