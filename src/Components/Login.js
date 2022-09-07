import React, {useEffect, useRef, useState} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    }, [])
    
    return(
        <div className = "all-content">
        <div className='form-area-content'>
            <div className = "second-content">
            <h1></h1>
            </div>
            <div className = "login-area">
            <h1 className = "login-header">Hello Again!</h1>
            <h5>Log in to your account to view some of our mouthwatering offers.<br/>
            Fill the form below</h5>
            <form>
            <label htmlFor = "email">Email </label>
            <input type= "email"
             ref = {inputRef}
             name = "email" 
             value = {email}
              onChange = {(event) =>setEmail(event.target.value)}
               placeholder ="Johnsmith@gmail.com"
                name = "email"
                 className = "form-control" required/>
             <label htmlFor= "password">Password</label>
            <input type= "password"
             name = "password"
              value = {password}
               onChange = {(event)=>setPassword(event.target.value)}
                placeholder='6+ strong character' name = "password"
                 className='form-control' required/>
           {/* <input type="checkbox"/>
            <label className="checker">Remember me</label><br/>*/}
            <button type = "submit" className='signup-submit'><strong>Login</strong></button>
            </form>

            <button className = "google-button">Sign in with Google</button>
            <div className = "small-footer-login">
            <p className = "word-header">Don't have an account?</p>
            <Link to = "/signup">
            <p className = "sign-up-color">Sign up</p></Link>
            </div>
        </div>
        
        </div>
    
        </div>

    
    )

}

export default Login;