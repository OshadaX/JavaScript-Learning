
import { useReducer } from "react"

function Reducer() {


    const reduce = (state, action) => {

        if (action === "increment") {
            return state + 1
        } else if (action === "decrement") {
            return state - 1
        } else if (action === "reset") {
            return state = 0
        }
    }




    const [count, dispatch] = useReducer(reduce, 0)





    return (
        <div>

            <h1>{count}</h1>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>

        </div>
    )

}

export default Reducer