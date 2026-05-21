// function Bye(){
//     return <h2>Bye component</h2>
// }
// export default Bye

//import styles from "./Bye.module.css"

function Bye(){
    const users =[
        { firstName:"Kiran", lastName:"Prasad", age:20},
        { firstName:"Ashraf", lastName:"vantiya", age:30},
        { firstName:"Priya", lastName:"Priya", age:19}
    ]
    function fullname(user){
        return user.firstName + " " + user.lastName;
    }

    return(
        <div>
            <h2>person details</h2>
            <ul>
            {users.map((user,index) => (
                <li>{fullname(user)} is {user.age} years old</li>
            ))}
            </ul>
        </div>
    )
}

export default Bye