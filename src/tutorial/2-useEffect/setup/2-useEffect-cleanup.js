import React, {useState, useEffect} from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);

    console.log("Render component - " + size);

    // version with the cleanup function
    useEffect(() => {
        console.log("Use Effect")
        window.addEventListener('resize', checkSize);
        return () => {
            console.log("cleanup");
            window.removeEventListener('resize', checkSize);
        }
    });

    // version with the initial empty dependencies (will not work if the component is rendered again - see conditional rendering)
    /*
        useEffect(() => {
            console.log("Use Effect")
            window.addEventListener('resize', checkSize);
        }, []);

        useEffect(() => {
            console.log("Use Effect - ", size);
        }, [size]);
    */


    const checkSize = () => {
        setSize(window.innerWidth);
        console.log("Check size - " + size);
    }

    return (<>
        <h1>Window</h1>
        <h2>{size}</h2>
    </>);
};

export default UseEffectCleanup;
