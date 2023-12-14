import React from 'react'

// Школьный вариант
// const GreetCard = (props) => {
//     console.log(props)
//   return (
//     <div className='greet_card'>
//         <h1>Hello {props.greetObj.username}</h1>
//         <p>You tole in project is {props.greetObj.role}</p>
//     </div>
//   )
// }

// Хороший вариант
const GreetCard = ({role, username}) => {
    return (
        <div className='greet_card'>
            <h1>Hello {username}</h1>
            <p>You tole in project is {role}</p>
        </div>
    )
}

export default GreetCard