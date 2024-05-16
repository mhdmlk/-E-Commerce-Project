import { RiDeleteBinFill } from "react-icons/ri";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { loadstripe } from '@stripe/stripe-js'
import {loadStripe} from '@stripe/stripe-js';
import './Cartpage.css'

const Cartpage = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        const getCartItems = async () => {
            const response = await axios.get('http://localhost:3000/api/v1/getusercart', {
                withCredentials: true
            })
            setproducts(response.data.product)
        }
        getCartItems()
    }, [])
    if (!products.length) {
        return (
            <div style={{ padding: '20px' }}>
                <h1>Cart Page</h1>
                <h2>Your Cart is empty</h2>
                <Link to="/">Continue Shopping</Link>
            </div>
        )
    }

    const makepayment = async () => {
        const stripe = await loadstripe("pk_test_51PFqWaSB7EBF3QIVQQVYCvaa0PxhQmLvIWp87TqnA09xaRmCMOQEQqNZHUdneUxYaIKOTfnKtH0Mw9yUmHnXRdUu00RqM2gUYi");
        const body = {
            products
        }


        const header = {
            "Content-Type": "application/json"
        }
        const response = await fetch("http://localhost:3000/api/v1/payment/create-payment", {
            method: "POST",
            headers: headers,
            credentials: "include",
            body: JSON.stringify(body)
        });

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId: session.id
        });
        if (result.error) {
            console.log(result.error);
        }
    }

    const deleteFromCart = async (productId) => {
        const response = await axios.delete(`http://localhost:3000/api/v1/delete/${productId}`, {
            withCredentials: true
        })
        if (response.data.message === 'Removed from cart') {
            setproducts(products.filter((product) => product.product_id !== productId))
        }
    }
    //setProducts is a funtion used to update the list of products displayed on the page
    //Inside setProducts, there's a filter method being called on the products array. This method goes through each product in the array and checks a condition.
    //product.product: This inner product object is nested within the outer product item. This kind of nesting might occur if your data structure id=sdesigned to encapsulat additional details or related data within a single item.
    return (
        <div style={{ padding: "20px" }}>
            <h1>Cart Page</h1>

            {product.map((product) => (
                <div key={product.product_id} style={{ marginBottom: "10px" }}>
                    <h2>{product.product.productName}</h2>

                    <p><img src={product.product.img} alt="img" /></p>
                    <p>price:₹{product.product.price}</p>
                    <p>Discount:{product.product.discount}</p>

                    <button style={{ display: "flex", alignItems: "center" }} onClick={() => deleteFromCart(product.product_id)}>
                        <RiDeleteBinFill size={20} style={{ marginRight: "5px" }}
                        />Delete </button>
                </div>
            )
            )}
            <button className="payment-btn" onClick={makepayment}>Checkout</button>
        </div>
    )

}

export default Cartpage
