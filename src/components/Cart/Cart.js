import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total+product.price;
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }else if (total > 15){
        shipping = 4;
    }

    const grandTotal = (total+shipping).toFixed(2);
    return (
        <div>
            <h3>Order Summery</h3>
            <h4>Items Ordered: {cart.length}</h4>
            <p><small>Shipping  Cost: {shipping}</small></p>
            <p>Item Price: {total}</p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;