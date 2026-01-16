import { useState } from 'react'

function TodoApp() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    const addTodo = () => {
        if (inputValue.trim() === '') return

        const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false
        }

        setTodos([...todos, newTodo])
        setInputValue('')
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        ))
    }

    return (
        <div>
            <h1>My Todo App</h1>

            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter a todo"
                />
                <button onClick={addTodo}>Add</button>
            </div>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span style={{
                            textDecoration: todo.completed ? 'line-through' : 'none'
                        }}>
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp