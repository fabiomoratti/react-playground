import React, {useEffect, useRef} from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
    const refContainer = useRef(null);
    const divContainer = useRef(null);
    const buttonContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("refContainer value: ", refContainer.current.value);
        console.log("refContainer current: ", refContainer.current);
        console.log("divContainer value: ", divContainer.current.value);
        console.log("divContainer current: ", divContainer.current);
    }

    useEffect(() => {
        console.log(refContainer.current);
        refContainer.current.focus();
        // press space to see that the form is submitted, because the button has the focus
        //buttonContainer.current.focus();
    })

    console.log(refContainer);

    return (<>
        <form className="form" onSubmit={handleSubmit}>
            <div><input type="text" ref={refContainer}/></div>
            <button type="submit" ref={buttonContainer}>submit</button>
        </form>
        <div ref={divContainer}>hello world</div>
    </>);
};

export default UseRefBasics;
