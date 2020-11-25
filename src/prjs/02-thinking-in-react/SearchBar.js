import React from 'react';

const SearchBar = (
    {
        inStock,
        handleSelect,
        searchString,
        handleSearchString
    }) => {

    return (
        <>
            <form className="form">
                <div className="form-control" style={{gridTemplateColumns: 'max-content max-content'}}>
                    <label htmlFor="search">Search products</label>
                    <input
                        name="search"
                        type="text"
                        value={searchString}
                        onChange={event => {
                            handleSearchString(event.target.value);
                        }}
                    />
                </div>
                <div className="form-control" style={{gridTemplateColumns: 'min-content max-content'}}>
                    <input
                        name="inStock"
                        type="checkbox"
                        style={{marginRight: '1rem'}}
                        defaultChecked={inStock}
                        onChange={event => {
                            handleSelect(event.target.checked)
                        }}
                    />
                    <label htmlFor="inStock">Only show products in stock</label>
                </div>
            </form>
        </>
    );
}

export default SearchBar;