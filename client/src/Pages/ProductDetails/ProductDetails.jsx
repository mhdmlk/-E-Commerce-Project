import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./ProductDetails.css"

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    const getSingleProduct = async () => {
        try {
            const response = await axios.get(`http://lacalhost:3000/api/v1/single/${id}`)
            setProduct(response.data.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSingleProduct()
    }, [id])

    const AddToCart = async () => {
        const response = await axios.post('http://lacalhost:3000/api/v1/addtocart', {
            productId: id,
            quantity: 1
        }, {
            withCredentials: true
        })
        if (response.status === 200) {
            navigate('/cart')
        }
    }

    return (
        <div>
            <h1 className='heading-tags'>Product Details</h1>
            <div className='productDetails-container'>
                <div>
                    <img className='product-details-img' src={product.img} alt="product-image" />
                </div>
                <div>
                    <h1 className='names'> {product.productName}</h1>
                    <h2 className='names'> {product.price}</h2>
                    <button className='cart-btn' onClick={AddToCart}>Add To Cart</button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails
