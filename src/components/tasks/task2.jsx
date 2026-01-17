import React from 'react'
import { useState } from 'react'


function task2() {

    const [input, setInput] = useState("<input appear here>");

    function handleInput(event) {

        if (event.target.value.length == 0) {
            setInput("<input appear here>");
        }
        else {
            setInput(event.target.value);
        }
    }


    return (
        <div>
            <h1>Task 2</h1>
            <input type="text" onChange={handleInput} />
            <p>Your input is: {input}</p>
            <p>Length:</p>
        </div>
    )
}

export default task2
