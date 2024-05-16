import React from 'react'
import MARQUEE from "react-fast-marquee";
import './Brands.css'

const Branddata = [
    {
        id: 1,
        image: "/images/shoelogo1.png"
    },
    {
        id: 2,
        image: "/images/shoelogo2.png"
    },
    {
        id: 3,
        image: "/images/shoelogo3.png"
    },
    {
        id: 4,
        image: "/images/shoelogo4.png"
    },
    {
        id: 5,
        image: "/images/shoelogo5.png"
    },
    {
        id: 6,
        image: "/images/shoelogo6.png"
    }
]
// import React from 'react'

const Brands = () => {
    return (
        <div className='brands-container'>
            <MARQUEE>
                {Branddata.map((Brands) => {
                    return (
                        <img src={Brands.image} key={Brands.id}
                            className='marquree-image' alt="brand-image" />
                    )
                })}
            </MARQUEE>
        </div>
    )
}
//{/* map: converting array or lists to render each item as a component(html)  */}
//{/* key : it is a propperty. which helps react to identify which items have changed, are added or are removed */}
export default Brands
