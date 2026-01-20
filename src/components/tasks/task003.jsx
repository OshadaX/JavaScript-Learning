import { useState, useEffect } from "react"

function Task003() {

    const [input, setInput] = useState("");

    useEffect(() => {
        document.title = input;
    }, [input]);



    return (
        <div>
            <h1>Task 003</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
    )
}

export default Task003