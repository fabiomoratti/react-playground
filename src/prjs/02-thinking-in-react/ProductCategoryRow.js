import React from 'react';

const ProductCategoryRow = ({category}) => {

    return (
        <>
            <ul className='product-category'>
                <li>Category: {category}</li>
            </ul>
        </>
    );
}

export default ProductCategoryRow;