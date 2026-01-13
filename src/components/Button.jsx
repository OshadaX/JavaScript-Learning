import { useState } from "react"

function toggleButton() {

    const [isToggled, setIsToggled] = useState(false)

    const [name, setName] = useState("")







    return (
        <div>
            <h1>{isToggled ? "ON" : "OFF"}</h1>
            <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
            <button onClick={() => setName("Oshada")}>Set Name</button>
            <h2>{name}</h2>
        </div>
    )
}

export default toggleButton
