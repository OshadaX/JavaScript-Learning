import image1 from "../assets/react.svg"
import "./Card.css"

function Card() {
    return (
        <div className="card1">
            <img className="card-img" src={image1} alt="" />
            <h2 className="card-title">Title</h2>
            <p className="card-price">Price</p>
            <button className="card-button">Add to Cart</button>
        </div>
    )
}

export default Card
