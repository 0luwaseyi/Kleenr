import React, {useState, useEffect} from 'react';
import Navbar from './Navbar/Navbar'
import './Body.css'
import {Link} from 'react-router-dom'




function Body(){
    const [text, setText] = useState("")
    const [fullText, setFullText] = useState("Get quality cleaning services")
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        if (index < fullText.length){
            setTimeout(()=>{
                setText(text + fullText[index])
                setIndex(index + 1)
            }, 100)
        }
    }, [index])

    
    return(

        <div className='background'>
            <Navbar/>
           
        <h1 className='body-header'>
            {text}
        </h1>
        <hr/>
        <p>
            We deliver the best cleaning/house-keeping services nationwide<br/>and at not too exorbitant
            prices.<br/> Your satisfaction is our utmost concern.
        </p>
        
       {/* <p>Kliener is an efficient and reliable cleaning<br /> company
        aimed at providing to the vast populace of Nigeria, <br /> the seamless
       ease of keeping your <br /> house, school or industries sparkling clean.</p>*/}

        <Link to="#"><button type='submit' className='btn-primary'><strong>Get Started!</strong></button></Link>
        <div className = "svg-section">
        <svg className='svg-content' preserveAspectRatio='xMinYMin meet' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L48,90.7C96,85,192,75,288,101.3C384,128,480,192,576,202.7C672,213,768,171,864,165.3C960,160,1056,192,1152,181.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

        </div>
        
           
            {/* <div className='container'>
            
            
                <Sideleft />
                <Sidepicture />

    </div>  */}  
        
        </div>
    
       
    )
}

export default Body;