import React from 'react';

function Product({span, img, productName, price}) {
    return (
        <article>
            <span>{span}</span>
            <img src={img} alt='' />
            <p>{productName}</p>
            <h4>{price}</h4>
        </article>
    );
}

export default Product;
