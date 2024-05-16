import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import "./Loginpage.css"

export default function Loginpage() {
    const [Username, setUsername] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const navigate = useNavigate()

    const LoginUser = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/login', {
                email: email,
                password: password,
                username: username
            })
            console.log(response.data.data)
            localStorage.setItem('UserLogged', JSON.stringify(response.data.data))
            //show success messagge only if the login attempt is successful
            alert('Login Successful')
          navigate('/')
        }
        catch (error) {
            alert('Invalid email or Password')
        }
    }
    return (
        <div className='container-lgn'>
            <div className='left-container'></div>
            <div className='right-container'></div>

            <div className='design'>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
            <form className="form-lgn">
                <h3 className='heading-lgn'>Login</h3>

                <label >Email</label><br />
                <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br /><label >Password</label><br />
                <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <button className='button-lgn' type='submit' onClick={LoginUser}>Login</button>
            </form>
        </div>
    )
}
