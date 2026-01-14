import { useEffect, useState } from "react";


function Hooks() {

    //task 1 functions

    const [state, setState] = useState(0)

    const count = state

    function increment() {
        setState(prevCount => prevCount + 1)
        console.log("Incremented", count)
    }

    function decrement() {
        setState(prevCount => prevCount - 1)
        console.log("Decremented", count)
    }

    function reset() {
        setState(0)
        console.log("Reset", 0)
    }

    //task 2 functions

    const [visible, setVisible] = useState("Hello")

    function view(shouldView) {
        if (shouldView) {
            setVisible("Hello")
        } else {
            setVisible("")
        }
    }







    return (
        <div>

            <h1>Task 1</h1>

            <button onClick={increment}>+</button>
            <span style={{ margin: "0 10px" }}>{count}</span>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>

            <h1>Task 2</h1>

            <button onClick={() => view(true)}>View</button>
            <span>{visible} </span>
            <button onClick={() => view(false)}>Hide</button>

        </div>
    )
}

export default Hooks