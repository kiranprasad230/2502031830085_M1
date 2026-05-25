import {useState} from 'react'

function Inputexample(){
    const[name, setName] = useState("")

  return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>hello, {name || "Guest"}</p>
   </div>
  )
}

export default Inputexample
