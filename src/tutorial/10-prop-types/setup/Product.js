import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({image, name, price}) => {
    return (
        <article className='product'>
            <img src={image.url} alt={name}/>
            <h4>{name}</h4>
            <p>{price}</p>
        </article>
    );
};

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.object.isRequired
}

Product.defaultProps = {
    name: 'missing name',
    price: 0.0,
    image: {url: defaultImage}
}


export default Product;
