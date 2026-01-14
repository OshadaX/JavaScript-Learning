
import { useReducer, useState } from "react";


const initialState = {
    todos: []
}

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [...state.todos, action.payload]
            }
        case "DELETE_TODO":
            return {
                todos: state.todos.filter((todo, index) => index !== action.payload)
            }
        default:
            return state
    }
}




function ToDo() {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [newTodo, setNewTodo] = useState("")

    const addTodo = () => {
        dispatch({ type: "ADD_TODO", payload: newTodo })
    }

    const deleteTodo = (index) => {
        dispatch({ type: "DELETE_TODO", payload: index })
    }









    return (
        <div>
            <h1>ToDo App</h1>

            <input type="text" placeholder="Add todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={addTodo}>
                Add
            </button>

            <ul>
                {state.todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDo
