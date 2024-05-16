// import { FaOpencart } from "react-icons/fa";
// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.css'
// import { useAuthContext } from "../../Context/AuthContext";

// export default function Navbar() {
//     const { user, setUser } = useAutherContext()
//     //logout user and clear local storage and set auth context user to null
//     const LogoutUser = async () => {
//         const response = await axios.post('http://localhost:3000/api/v1/user/logout')

//         if (response.status === 200) {
//             localStorage.removeItem('userLogged')
//             setUser(null)
//             alert('you have been logged out')
//         }
//     }
//     return (
//         <nav className='navbar'>
//             {/* <h1>E-Commerce</h1> */}
//             <ul >
//                 <Link className='links' to={'/'}>Home</Link>
//                 <Link className='links' to={'/login'}>Login</Link>
//                 <Link className='links' to={'/register'}>Register</Link>
//                 <Link className='links' to={'/cart'}><FaOpencart /></Link>

//             </ul>
//         </nav>
//     )
// }

// Navbar.jsx


import axios from "axios";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useAuthContext } from "../../Context/AuthContext";


export default function Navbar() {
    const { user, setUser } = useAuthContext()

    const LogoutUser = async () => {
        const response = await axios.post('http://localhost:3000/api/v1/user/logout')

        if (response.status === 200) {
            localStorage.removeItem('userLogged'),
                setUser(null)
            alert('you have been logged out')
        }
    }
    return (

        <nav className='navbar'>
            <h1 className="headingtag1">E- commerce</h1>
            <div className='navbar-links'>
                {!user ? (
                    <>
                        <Link className="link" to={'/login'}>Login</Link>
                        <Link className="link" to={'/register'}>Register</Link>
                    </>
                ) : (
                    <>
                        <Link className="link" to={"./"}>Home</Link>
                        <button className="btn btn-primary" onClick={LogoutUser}>Logout</button>

                    </>
                )}
                <Link className="link" to={'./'}>Home</Link>
                {/* <Link className="link" to={'./login'}>Login</Link> */}
                {/* <Link className="link" to={'./register'}>Register</Link> */}
                <Link className="linkcart" to={'./cart'}><AiOutlineShoppingCart /></Link>


            </div>
        </nav>
    )
}