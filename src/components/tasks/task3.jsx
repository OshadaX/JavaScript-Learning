function Task3() {

    function hello1() {
        console.log("Hello 1");
    }

    const hello2 = () => {
        console.log("Hello 2");
    }

    function hello3(name) {
        console.log(`Hello ${name}`);
    }




    return (
        <div>
            <h1>Task 3</h1>
            <button onClick={hello1}>Click 1</button>
            <button onClick={hello2}>Click 2</button>
            <button onClick={() => hello3("Oshada")}>Click 3</button>

            <p>Check console for output on button clicks.</p>
        </div>
    )
}

export default Task3
