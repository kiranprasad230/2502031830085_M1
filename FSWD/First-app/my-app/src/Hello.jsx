// import './App.css'
// function Hello(){
//     const name ="Kiran"

//     return <h2 className='test'>Hello {name}</h2>
// }
// export default Hello


//function Hello(){
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

// function Hello(){
//     const fruits =["apple","banana","orange"]

//     return(
//         <div>
//             <h2>Fruit List</h2>
//             <ul>
//                 {fruits.map((fruits, index) => (
//                     <li>{index} - {fruits}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default Hello

function Hello({name="guest", age=18, city="unknown", hobbies}){
    return(
        <div>
            <h2>Hello ,{name}</h2>
            <p>Age: {age}</p>
            <p>city: {city}</p>
            <ul>
                {hobbies.map((hobby, index)=> (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    )
}
export default Hello

