import React from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({data}) => {

    return (
        <>
            <div>
                <ul className='product-title'>
                    <li>Name</li>
                    <li>Price</li>
                </ul>
            </div>
            <div>
                <ul>
                    {data
                        .map((item) => item.category)
                        .filter((value, index, self) => self.indexOf(value) === index)
                        .map((category) => {
                            return (
                                <React.Fragment key={category}>
                                    <li><ProductCategoryRow category='{category}'/></li>
                                    <li>
                                        <ul>
                                            {data
                                                .filter((item) => item.category === category)
                                                .map((item) => {
                                                    return (
                                                        <li key={item.name}>
                                                            <ProductRow
                                                                product={item.name}
                                                                price={item.price}/>
                                                        </li>
                                                    );
                                                })}

                                        </ul>
                                    </li>
                                </React.Fragment>
                            );
                        })}
                </ul>
            </div>
        </>
    );
}

export default ProductTable;