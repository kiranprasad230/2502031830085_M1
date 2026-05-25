// import reactLogo from './assets/react.svg'
// //import { useState } from 'react'
// //import reactLogo from './assets/react.svg'
// //import viteLogo from './assets/vite.svg'
// //import heroImg from './assets/hero.png'
// //import './App.css'
// import Hello from "./Hello"
// import Bye from "./Bye"


// function App() {

//   return (
//     <>
//       <h1>App Component</h1>
//       <Hello/>
//       <img src={reactLogo} width='200' />
//       <Bye />
//     </>
//   )
// }
// export default App


// import Hello from "./Hello"
// import Bye from "./Bye"



// function App() {

//   return (
//     <>
//       <Hello/>
//       <Bye />
      
//     </>
//   )
// }
// export default App

import Hello from "./Hello"
import Button from "./Button"
function App(){
  const hobbies =["reading","coding","travelling"]

  function Message(){
    alert("Hello from message box")
  }
  function ByeMessage(){
    alert("Hello from Byemessage box")
  }
  return(
    <>
    <Hello name="Kiran" age={20} city="Ahmedabad" hobbies={hobbies}/>
    <Button label="Click me" handleClick={Message} />
    <Button label="Just Click" handleClick={ByeMessage} />

    </>
  )
}
export default App
