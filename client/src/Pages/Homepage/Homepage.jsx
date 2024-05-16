import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Promo from '../../Components/Promo/Promo'
import Services from '../../Components/Services/Services'
import Footer from '../../Components/Footer/Footer'
import Brands from '../../Components/Brands/Brands'
import PopularProducts from '../../Components/PopularProducts/PopularProducts'
import MostFeatured from '../../Components/MostFeatured/MostFeatured'

export default function Homepage() {
  return (
    <>
      <div className='promo'>
        <Banner />
        <Promo />
      </div>
      <Services />
      <PopularProducts />
      <MostFeatured />
      <Brands />
      <Footer />

    </>
  )
}
