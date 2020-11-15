import React, {useState} from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

    const [text, setText] = useState('aaa');
    const firstValue = text || 'hello world';
    const secondValue = text && 'hello world';
    return (<>
        <h1>First: {firstValue}</h1>
        <h1>Second: {secondValue}</h1>
        <h1>{text || 'default value'}</h1>
        {text && <h1>Text is truish</h1>}
    </>);
};

export default ShortCircuit;
