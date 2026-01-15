
import { useState } from "react"

function Form() {

    //email
    const [email, setEmail] = useState("")

    function emailChange(e) {
        setEmail(e.target.value)
    }

    //password
    const [password, setPassword] = useState("")

    function passwordChange(e) {
        setPassword(e.target.value)

    }

    function submitt() {

        if (password.length < 8) {
            alert("Password must be at least 8 characters long")

            if (email && password !== "") {
                console.log(email, password)
                alert("Form submitted")
            } else {
                alert("Form not submitted")
            }
        }
    }




    return (
        <div>
            <h1>Form</h1>
            <input type="email" placeholder="Enter email" value={email} onChange={emailChange} /><br /><br />
            <input type="password" placeholder="Enter password" value={password} onChange={passwordChange} /><br /><br />
            <button onClick={submitt}>Submit</button>
        </div>
    )
}

export default Form