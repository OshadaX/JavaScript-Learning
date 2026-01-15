import { useState } from "react"

function toggleButton() {

    const count = 5

    function handleOnClick() {

        if (count == 5) {
            console.log("count is 5");
        }
        else {
            console.log("count is not 5");
        }

    }









    return (

        <button onClick={handleOnClick}>click me</button>

    )
}

export default toggleButton
