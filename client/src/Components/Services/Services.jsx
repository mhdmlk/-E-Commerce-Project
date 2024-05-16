import { FcCallback } from "react-icons/fc";
import { GiRotaryPhone } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
import React from 'react'
import "./Services.css"

export default function Services() {
    return (
        <div>
            <h2 className='heading-services'> Services</h2>
            <div className='services-container'>
                <div>
                    <BiPhoneCall className="icons" size={30} />
                    <h3 className="services-content"> Free Delivery upto 100 Rs</h3>
                </div>
                <div>
                    <GiRotaryPhone className="icons" size={30} />
                    <h3 className="services-content"> 24/7 contact Services</h3>
                </div>
                <div>
                    <FcCallback className="icons" size={30} />
                    <h3 className="services-content">24/7 Online Services</h3>
                </div>
            </div>
        </div>
    )
}
