import React, {useEffect, useRef, useState} from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'


function Signup(){

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password,  setPassword]  = useState('')
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    }, [])

    let handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            let res = await fetch("http://127.0.0.1:8000/kleenr/signup/",{
            method: "POST",
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,

            }),
        });
        let resJson = await res.json()
            if (res.status === 200){
                console.log("Your post was successful!!")
                window.replace("/")
            }
            else{
                console.log("Failed to post!")

            }
        }
        catch (err){
            console.log(err)
        }
    }
    return(
        <div className='signup-content'>
           
            <div className='signup-area'>
                <div className='text-header-content'>
                <p className='word-header'>Have an account? </p>
               <Link to = "/login"> <p className='word-sign'>Sign in</p></Link>

                </div>
            
            <h1 className='first-header'>Welcome to Kliener</h1>
            <h5>Get the best household cleaning and laundry services from Kliener <br></br>
            Fill the form below to sign up</h5>
            <form onSubmit = {handleSubmit}>
                <label htmlFor='firstname'>Firstname</label>
                <input type='text'
                ref = {inputRef}
                value = {firstname}
                onChange  = {(event)=>setFirstname(event.target.value)}
                 placeholder= "John"
                  name = "firstname"
                   className='form-control'
                    required></input>
                <label htmlFor='lastname'>Lastname</label>
                <input type='text'
                 placeholder= "Smith"
                 value = {lastname}
                 onChange = {(event)=>setLastname(event.target.value)}
                  name = "lastname"
                   className='form-control'
                    required></input>
                <label htmlFor='email'>E-mail</label>
                <input type='email'
                value = {email}
                onChange = {(event)=>setEmail(event.target.value)}
                 placeholder= "johnsmith@gmail.com"
                  name = "email"
                   className='form-control'
                   required></input>
               {/* <label htmlFor='telephone'>Telephone:</label><br></br>
                <input type='tel'
                 placeholder= "+234-xxx-xxx-xxx-xx"
                  name = "tel"
                   className='form-control' 
                   required></input><br></br>
                <label htmlFor='Address'>Address:</label><br></br>
                <input type='text'
                 placeholder= "Type in your address" 
                 name = "address"
                  className='form-control'
    required></input><br></br>*/}
                <label htmlFor='Password'>Password</label>
                <input type='password'
                value = {password}
                onChange = {(event)=>setPassword(event.target.value)}
                 placeholder= "6+ strong character"
                  name = "password"
                   className='form-control'
                    required></input>
                <button type= 'submit' className='signup-submit'>Create an account</button>
            </form>
            <div className='small-footer'>

                <h5>Or Sign up with</h5>
           
                
            </div>
            

            </div>
            <div className='side-content'>
                <h1 className='side-header'>Join us today.</h1>
                <p className='side-text'>Kliener is one of the best companies out there <br></br>
                that you can trust. I have worked with them for over three years<br></br> and they keep delivering
                the best of services.</p>
            </div>
          

            
        
        </div>
    )
}

export default Signup;