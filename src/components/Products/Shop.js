import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []);
    
    const shoppingCartHandler = (product) =>{
       const  selectedItems = [...cart, product]
        setCart(selectedItems)

    }
    const totalPrice = cart.reduce((previous, current) => previous + current.price,0)
    const shippingCharge = 5* cart.length;
    const tax = 2*cart.length;
    const grandTotal = totalPrice+shippingCharge+tax;
    const clearCart = () =>{
        const newCart =[];
        setCart(newCart)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9 product-container col-8">
                 <div className="row">
                 {
                      products.map(product =><Product handler = {shoppingCartHandler} key={product.id} product = {product}></Product>)
                  } 
                   </div> 
                </div>
                <div className="col-md-3 col-4 shopping-cart">
                    <h3>Order Summery</h3>
                    <p>Selected Item: {cart.length}</p>
                    <p>Total Price: ${totalPrice} </p>
                    <p>Total Shipping Charge: ${shippingCharge} </p>
                    <p>Tax: ${tax} </p>
                    <p>Grand Total: ${grandTotal} </p>
                    <button onClick={clearCart} className="btn btn-danger mt-3">Clear Cart</button> <br />
                    <button className="btn btn-success mt-3">Checkout</button>
                </div>
            </div>
            
        </div>
    );
};

export default Shop;