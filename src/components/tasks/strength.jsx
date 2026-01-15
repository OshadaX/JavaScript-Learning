import { useState } from "react"


function Strength() {

    const [password, setPassword] = useState("")
    const [strength, setStrength] = useState("")

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function checkStrength() {
        if (password.length < 6) {
            setStrength("Weak")
        } else if (password.length < 10) {
            setStrength("Medium")
        } else {
            setStrength("Strong")
        }

        return strength
    }


    return (
        <div>
            <h1>Strength</h1>
            <h1>Password Strength Checker</h1>
            <input type="text" value={password} onChange={handlePasswordChange} placeholder="Enter your password" />
            <p>PASSWORD:{password}</p>
            <button onClick={checkStrength}>Check</button>
            <p>Password Strength: {strength}</p>
        </div>
    )
}

export default Strength