function Task1() {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(setCount)
    const [reset, setReset] = useState(count)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const Reset = () => {
        setCount(reset)
    }



    return (
        <div>
            <h1>Task 1</h1>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Task1