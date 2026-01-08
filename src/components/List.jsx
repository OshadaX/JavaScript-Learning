
function List() {

    const fruits = [
        { id: 1, name: "Apple", calories: 52 },
        { id: 2, name: "Banana", calories: 89 },
        { id: 3, name: "Cherry", calories: 52 },
        { id: 4, name: "Date", calories: 23 },
        { id: 5, name: "Fig", calories: 26 },
        { id: 6, name: "Grape", calories: 60 }
    ]
    const list = fruits.map(
        (fruit) => <li key={fruit.id}>{fruit.name} - <b>calories {fruit.calories}</b></li>
    )


    return (
        <ol>
            {list}
        </ol>
    )
}

export default List
