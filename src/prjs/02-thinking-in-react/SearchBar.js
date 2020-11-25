import React from 'react';

const SearchBar = () => {
    const search = 'Search...';
    return (
        <>
            <form className="form">
                <div className="form-control" style={{gridTemplateColumns: 'max-content'}}>
                    <input type="text" value={search}/>
                </div>
                <div className="form-control" style={{gridTemplateColumns: 'min-content max-content'}}>
                    <input name="inStock" type="checkbox" style={{marginRight: '1rem'}}/>
                    <label htmlFor="inStock">Only show products in stock</label>
                </div>
            </form>
        </>
    );
}

export default SearchBar;