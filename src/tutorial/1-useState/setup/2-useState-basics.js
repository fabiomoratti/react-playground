import React, {useState} from 'react';

const UseStateBasics = () => {
    // console.log(useState('hello world'))
    // const value = useState(2)[0]
    // console.log(value)
    // const handler = useState(2)[1]
    // console.log(handler)

    // useState is a React Hook (see https://reactjs.org/docs/hooks-state.html), it declares a state variable (text) in
    // this case. useState takes the initial state value of the state variable and returns the current state and a
    // function to update it.
    const [text, setText] = useState('random title')
    const handleClick = () => {
        if (text === 'random title'){
            setText('hello world');
        } else {
            setText('random title')
        }
    }
    return (<>
        <h1>{text}</h1>
        <button className="btn" onClick={handleClick}>Change Title</button>
    </>);
};

export default UseStateBasics;
