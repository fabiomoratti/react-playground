import React from 'react'

const Book = (props) => {
    const {img, title, author} = props;

    const clickHandler = () => {
        alert("hello world");
    }

    const complexExample = (author) => {
        console.log(author);
    }

    return (
        <article className='book'>
            <img alt="img" src={img}/>
            <h1 onClick={() => {
                console.log(title)
            }}>{title}</h1>
            <h2>{author}</h2>
            <button type="button" onClick={clickHandler}>Button 1</button>
            <button type="button" onClick={() => complexExample(author)}>Button 2</button>
        </article>
    );
}

export default Book