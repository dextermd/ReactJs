import React from 'react';

// Школьный вариант
// const TechStack = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <p>{props.arr}</p>
//         </div>
//     );
// };

// Хороший вариант
const TechStack = ({techStack}) => {
    return (
        <div>
            <p>{techStack}</p>
            <p>{techStack.map(index => index + ' ')}</p>
            <ul>
                {
                    techStack.map((tech, idx) => (
                        <li key={idx}>{idx + 1} {tech}</li>
                    ))
                }
            </ul>

        </div>
    );
};

export default TechStack;