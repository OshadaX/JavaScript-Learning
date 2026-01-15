import { useState } from "react"

function LiveText() {

    const [text, setText] = useState("")

    function displayText(e) {
        setText(e.target.value)

    }
    function countText() {
        console.log(text.length)


        if (text.length > 10) {
            return "Text is too long"
        }
        return text.length
    }




    return (
        <div>
            <h1>Live Text</h1>
            <input type="text" value={text} onChange={displayText}></input>
            <p>{text}</p>
            <p>{countText()}</p>
        </div>
    )
}

export default LiveText
