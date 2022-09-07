import React from 'react'
import './Sideleft.css'

const color={
    color: "#0f62fe",
}


function Sideleft(){
    return(
        <div className='header'>
        <h1><strong>Get affordable  
            <div style={color}>
                cleaning services</div>anywhere in Nigeria</strong>
        </h1>
        <p>Kliener is an efficient and reliable cleaning<br /> company
        aimed at providing to the vast populace of Nigeria, <br /> the seamless
        ease of keeping your <br /> house, school or industries sparkling clean.</p>
        <button type='submit' className='btn-primary'><em><strong>Sign up!</strong></em></button>
        {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,261.3C672,267,768,245,864,229.3C960,213,1056,203,1152,192C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

       
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,181.3C384,181,480,139,576,117.3C672,96,768,96,864,85.3C960,75,1056,53,1152,80C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    */}
    </div>
    )
}

export default Sideleft;