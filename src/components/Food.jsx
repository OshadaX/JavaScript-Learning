function Food() {

    const food = [
        { name: "Pizza", price: 100 },
        { name: "Burger", price: 50 },
        { name: "Fries", price: 20 },
    ]
    const food1 = "apple";


    return (
        <div>
            <h1>Food</h1>
            <ul>
                <li>{food1.toUpperCase()}</li>
                <li>{food[0].name.toUpperCase()}</li>
            </ul>
        </div>
    )
}

export default Food
