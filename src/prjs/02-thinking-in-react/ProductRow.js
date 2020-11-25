import React from 'react';

const ProductRow = ({product, price}) => {

    return (
        <div>
            <ul className='product-list'>
                <li>Product: {product}</li>
                <li>Price: {price}</li>
            </ul>
        </div>
    );
}

export default ProductRow;