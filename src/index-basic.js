import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import Book from "./Book";


import {books} from './books';

function BookList() {
    return (
        // This is  comment
        <section className='bookList'>
            {books.map((book) => {
                return <Book key={book.id}{...book}/>
            })}
        </section>
    );
}

ReactDom.render(<BookList/>, document.getElementById('root'));