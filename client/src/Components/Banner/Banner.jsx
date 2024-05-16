import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'

export default function Banner() {
    return (
        <Carousel autoPlay showThumbs={false} interval={3000} infiniteLoop showStatus={false} showIndicators={false}>
            {/* <div className='banner-container'>
                <img src="/images/shoe1.jpeg" alt="banner" />
            </div>
            <div className='banner-container'>
                <img src="/images/shoe2.jpeg" alt="banner" />
            </div>
            <div className='banner-container'>
                <img src="/images/shoe3.jpeg" alt="banner" />
            </div>
            <div className='banner-container'>
                <img src="/images/shoe4.jpeg" alt="banner" />
            </div> */}
        </Carousel>
    )
}
