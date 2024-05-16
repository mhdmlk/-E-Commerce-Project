import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './MostFeatured.css'

const MostFeatured = () => {
    const [products, setProducts] = useState([])

    const getAllProducts = async () => {
        try {
            const response = await axios.get('http://lacalhost:3000/api/v1/all')
            console.log(response.data.data)
            setProducts(response.data.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllProducts()
    }, [])
    return (
        <div>
            <h1 className='heading-tags'>Most Featured</h1>
            <div className='most-featured'>
                {products.map((product) => {
                    //fixed key issue here -> user.id to user_id
                    return (
                        <ProductCard productid={product_id} name={product.ProductName} img={product.img} price={product.price} key={product_id} />
                    )
                })}
            </div>
        </div>
    )
}

export default MostFeatured
