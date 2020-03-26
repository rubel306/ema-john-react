import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const{name, price, img, stock, seller} = props.product;
    return (
        <div className="product">
           <div className="product-img">
                <img src={img} alt=""/>
           </div>
           <div className="product-details">
                <h4 className="product-title">
                    {name}
                </h4>
                <p><small>by: {seller}</small></p>
                <p className="product-price">
                    ${price}
                </p>
                <p className="stock">
                    only {stock} left in stock - order soon
                </p>
                <button className="cartBtn"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
           </div>
        </div>
    );
};

export default Product;