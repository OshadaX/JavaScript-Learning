import { useEffect, useState } from "react";

function Effect() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <h1>Effect</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Add</button>

        </div>
    )

}

export default Effect