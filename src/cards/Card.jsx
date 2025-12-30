import image1 from "../assets/react.svg"
import "./Card.css"

function Card() {
    return (
        <div className="card1">
            <img src={image1} alt="" />
            <h2>Title</h2>
            <p>Price</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default Card
