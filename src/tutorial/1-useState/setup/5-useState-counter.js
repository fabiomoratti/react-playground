import React, {useState} from 'react';

const UseStateCounter = () => {
    const [value, setValue] = useState(0);

    console.log("Function: " + value);

    const reset = () => {
        setValue(0);
    }

    // clicking multiple times does not increase the value...
    const complexIncrease = () => {
        console.log("complexIncrease 1: " + value);

        setTimeout(() => {
            console.log("setTimeout 1: " + value);
            // ... because we are grabbing the value here and it has not increased yet
            setValue(value + 1);
            console.log("setTimeout 2: " + value);
        }, 2000);

        console.log("complexIncrease 2: " + value);
    }

    return (
        <>
            <section style={{margin: '4rem 0'}}>
                <h2>regular counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={() => setValue(value - 1)}>decrease</button>
                <button className='btn' onClick={reset}>reset</button>
                <button className='btn' onClick={() => setValue(value + 1)}>increase</button>
            </section>

            <section style={{margin: '4rem 0'}}>
                <h2>more complex counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={complexIncrease}>increase later</button>
            </section>
        </>
    );
};

export default UseStateCounter;
