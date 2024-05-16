import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'
const ProductCard = ({ productid, name, price, img }) => {
    return (
        <Link to={`/product/${productid}`} className='productcard'>
            <div>
                <img className='product-img' src={img} alt="product" />
            </div>
            <div>
                <h1>{name}</h1>
                <h3>₹ {price}</h3>
                <div>Add to Cart</div>
            </div>
        </Link>
    )
}

export default ProductCard
