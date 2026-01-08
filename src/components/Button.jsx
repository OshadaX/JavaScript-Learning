
function Button() {

    let count = 0

    const handleClick = (name) => {
        if (count < 3) {
            count++
            console.log(`${name} Clicked ${count} times`)
        }
        else {
            console.log(`${name} stopped clicking`)
        }
    }

    const handleEvent = (e) => {
        console.log(e)
    }

    const handleEvent2 = (e) => e.target.style.backgroundColor = "green"


    return (
        <div>
            <button style={{ backgroundColor: "red", color: "white" }} onClick={() => handleClick("Oshada")}>Click Me</button>
            <button style={{ backgroundColor: "blue", color: "white" }} onClick={handleEvent}>Click Me</button>
            <button style={{ backgroundColor: "yellow", color: "white" }} onDoubleClick={(e) => handleEvent2(e)}>Click Me</button>
        </div>
    )
}

export default Button
