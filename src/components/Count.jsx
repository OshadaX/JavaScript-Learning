import { useState } from "react"

function toggleButton() {

    const [isToggled, setIsToggled] = useState(false)





    return (
        <div>
            <h1>{isToggled ? "ON" : "OFF"}</h1>
            <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
        </div>
    )
}

export default toggleButton
