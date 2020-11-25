import React from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

import {data} from './data';

const FilterableProductTable = () => {

    return (
        <>
            <SearchBar/>
            <ProductTable data={data}/>
        </>
    );
}

export default FilterableProductTable;