import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total+product.price;
    }
    return (
        <div>
            <h3>Order Summery</h3>
            <h4>Items Ordered: {cart.length}</h4>
            <p>Item Price: {total}</p>
        </div>
    );
};

export default Cart;