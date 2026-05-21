// //function Hello(){
//      const getName = (Kiran) => {
//     return "Kirannn"
//    }
//    function handleClick(){
//    alert("Button was clicked")
//    }
//    const handleInput= (event)=>{
//     console.clear()
//     console.log("Value : ", event.target.value)
//    }
//    const name = "Kiran"
//    const name1 = "Prasad"

//    const handleMouseOver = () => console.log("Mouse is over the text")
//    const handleDoubleClick= () => console.log("Text double clicked")

//    return(
//     <>
//         <h1>Hello {getName(name)}</h1>
//         <h1>Bye {getName(name1)}</h1>

//         <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Loren rat cat mat hat</p>

//         <button onClick={handleClick}>Click me</button>
//         <button onClick={()=> alert("Hello from inline function")}>Say hello</button>
//         <br />
//         <input type="text" onChange={handleInput} placeholder="type something" />
//     </>
//    )
// }
// export default Hello

function Hello(){
    const fruits =["apple","banana","orange"]

    return(
        <div>
            <h2>Fruit List</h2>
            <ul>
                {fruits.map((fruits, index) => (
                    <li>{index} - {fruits}</li>
                ))}
            </ul>
        </div>
    )
}
export default Hello
