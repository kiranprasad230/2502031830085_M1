import {useState} from 'react'

function Userprofile() {
    const[name, SetName] = useState("Guest")
    const[age, SetAge] = useState(20)


  return (
    <div>
        <h2>Name : {name}</h2>
        <h3>Age : {age}</h3>
   <button onClick={() => SetName("Kiran")}>Change Name</button>
   <button onClick={() => SetAge(age + 1)}>Change Age</button>
   </div>
  )
}

export default Userprofile
