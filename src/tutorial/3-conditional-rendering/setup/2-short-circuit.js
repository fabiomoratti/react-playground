import React, {useState, useEffect} from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

    const [text, setText] = useState('aaa');
    const [isError, setIsError] = useState(false);
    const firstValue = text || 'hello world';
    const secondValue = text && 'hello world';
    console.log("Render");

    useEffect(() => {
        console.log("Render in useEffect")
    }, []);

    return (<>
        <h1>First: {firstValue}</h1>
        <h1>Second: {secondValue}</h1>
        <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>
        {isError ? <h1>Error...</h1> : <h1>No error</h1>}
    </>);
};

export default ShortCircuit;
