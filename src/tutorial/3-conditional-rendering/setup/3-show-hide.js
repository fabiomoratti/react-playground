import React, {useState, useEffect} from 'react';

const ShowHide = () => {

    const [show, setShow] = useState(false);
    return (
        <>
            <button className="btn" onClick={() => setShow(!show)}>show/hide</button>
            {show && <Item/>}
        </>
    );
};

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth);
    }
    useEffect(() => {
            window.addEventListener('resize', checkSize);
            // in this case the [] deps does not save us..., we need to use the cleanup function
            return () => {
                console.log("cleanup");
                window.removeEventListener('resize', checkSize);
            }
        },
        []
    )
    return (
        <div style={{marginTop: '2rem'}}>
            <h1>Window</h1>
            <h2>size: {size}</h2>
        </div>
    )
}

export default ShowHide;
