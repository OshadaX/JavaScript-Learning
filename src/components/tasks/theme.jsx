
import { useState } from "react"

function Theme() {



    const [theme, setTheme] = useState("light")

    function themeChange() {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <div>
            <h1>Theme</h1>
            <button onClick={themeChange}>Change theme</button>
        </div>
    )
}

export default Theme