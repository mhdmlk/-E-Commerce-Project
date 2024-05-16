import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import Registerpage from './Pages/Registerpage/Registerpage'
import Loginpage from './Pages/Loginpage/Loginpage'
import Navbar from './Components/Navbar/Navbar'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cartpage from "./Pages/Homepage/Cartpage/Cartpage"
import { useAuthContext } from './Context/AuthContext'
// --
// --


export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/login' element={<Loginpage />} />
                <Route path='/register' element={<Registerpage />} />

                <Route path='/cart' element={<Cartpage />} />
                <Route path='/product/:id' element={<ProductDetails />} />
                {/* page not found route should always add in last. */}

            </Routes>
        </>
    )
}
