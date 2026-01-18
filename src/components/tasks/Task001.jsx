
import { useState } from "react"

function Task001() {

    const [number, setNumber] = useState(0);
    const [bio, setBio] = useState("");
    const [text, setText] = useState("");


    function increNum() {
        setNumber(number + 1);
    }

    function decreNum() {
        setNumber(number - 1);
        if (number === 0) {
            alert("Number is 0");
            setNumber(0);
        }
    }

    function resetNum() {
        setNumber(0);
    }

    function showBio() {
        setBio("hello");
    }

    function hideBio() {
        setBio("");
    }

    function livePreview() {
        setText(event.target.value);
    }


    return (
        <div>
            <h1>Task 001</h1>
            <h1 style={{ fontSize: "50px" }}>{number}</h1>
            <br />
            <button style={{ fontSize: "20px" }} onClick={increNum}>Increment</button>
            <button style={{ fontSize: "20px" }} onClick={decreNum}>Decrement</button>
            <button style={{ fontSize: "20px" }} onClick={resetNum}>Reset</button>

            <h1>Task 02</h1>
            <button style={{ fontSize: "20px" }} onClick={showBio}>Show Bio</button>
            <p style={{ fontSize: "20px" }}>{bio}</p>
            <button style={{ fontSize: "20px" }} onClick={hideBio}>Hide Bio</button>

            <h1>Task 03</h1>
            <input type="text" value={text} onChange={livePreview} />
            <p style={{ fontSize: "20px" }}>{text}</p>

        </div>
    )
}

export default Task001
