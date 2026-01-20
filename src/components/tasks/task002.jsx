import { useState, useEffect } from "react"

function Task002() {

    const [userRef, setUserRef] = useState("Example");

    console.log("Rendering");

    useEffect(() => {
        console.log("useEffect");
    }, [userRef]);



    return (
        <div>
            <h1>Task 002</h1>

            <button onClick={() => setUserRef("Posts")}>Posts</button>
            <button onClick={() => setUserRef("Comments")}>Comments</button>
            <button onClick={() => setUserRef("Users")}>Users</button>

            <p>{userRef}</p>



        </div>
    )
}

export default Task002
