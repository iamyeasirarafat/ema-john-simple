import React from 'react';
import './Product.css'
const Product = ({product, handler}) => {
    
    const {img, name, seller, ratings, price} = product ;
    return (
        <div className="col-lg-4 col-md-6 ">
            <div className="product">
                <img src={img} alt="" />
                <div className="product-info">
                    <h5>{name}</h5>
                    <h6>price:${price}</h6>
                    <p className="product-seller"><small>Manufacturer: {seller}</small></p>
                    <p><small>rate: {ratings} Stars</small></p>
                </div>
                <button onClick={() => handler(product)} className="button">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;