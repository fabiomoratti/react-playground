import React, {useState, useEffect} from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
    const [value, setValue] = useState(0);

    // gets called only when value changes (value is in the deps array)
    useEffect(() => {
            console.log('call useEffect');
            if (value >= 1) {
                document.title = `New Messages - ${value}`;
            }
        },
        [value]);

    // gets called the first time only (empty deps array)
    useEffect(() => {
        console.log("first time only!!!");
    }, []);

    console.log('Render component');
    return (<>
        <h1>{value}</h1>
        <button className="btn" onClick={() => {
            setValue((prevValue) => prevValue + 1)
        }}>click me
        </button>
    </>);
};

export default UseEffectBasics;
