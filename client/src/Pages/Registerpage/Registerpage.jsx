import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import "./Registerpage.css"

export default function Registerpage() {
    const [username, setUsername] = useState("") //useState is shortcut for function
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const RegisterUser = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:3000/api/v1/user/register',
            {
                email: email,
                password: password,
                username: username
            })
        console.log(response)
        navigate('/login')
    }

    return (
        <div className='container-rgstr'>
            <div className='left-container'></div>
            <div className='right-container'></div>

            <div className='design'>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
            <form className="form-rgstr">

                <h3 className='heading-rgstr'>Register</h3>
                <label >Username</label><br />
                <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)}
                /><br />
                <br />
                <label >Email</label><br />
                <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                <label >Password</label><br />
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <button className='button-rgstr' type='submit' onClick={RegisterUser}>Register</button>
            </form>
        </div>
    )
}
