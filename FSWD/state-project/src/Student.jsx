import {useState} from 'react'

function Student(){
    const[student, setStudent] = useState({
        name:"Priya",
        grade:"B",
        city:"ahm"
    })
    const changeCity = () => {
        setStudent({...student, city : "Mumbai"})
    }

  return (
    <div>
        <h2>Name : {student.name}</h2>
        <p>Grade : {student.grade}</p>
        <p>City : {student.city}</p>
   <button onClick={changeCity}>Change City</button>
   </div>
  )
}

export default Student
