import React, {useState} from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

import {data} from './data';

const FilterableProductTable = () => {

    const [inStock, setInStock] = useState(false);
    const [searchString, setSearchString] = useState('');

    const handleSelect = (isSelected) => {
        //console.log("handleSelect", isSelected);
        setInStock(isSelected);
    }

    const handleSearchString = (searchString) => {
        //console.log("handleSearchString", searchString);
        setSearchString(searchString);
    }

    return (
        <>
            <SearchBar
                inStock={inStock}
                handleSelect={handleSelect}
                searchString={searchString}
                handleSearchString={handleSearchString}
            />
            <ProductTable
                data={data}
                inStock={inStock}
                searchString={searchString}
            />
        </>
    );
}

export default FilterableProductTable;