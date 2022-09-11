import React, {useEffect} from 'react'
import './Background.css'
import AOS from "aos"
import "aos/dist/aos.css"



function Background(){

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])
    return(
        <div className='background-content'>
            <div data-aos = "fade-up" data-aos-duration = "1500" className='left-content'>
               <h1>Fast, Reliable <br /> and Efficient</h1>
               <p>At Kleenr, we are committed to giving you the best services<br /> you can think of
                   our charges are consciously tailored to suit your pocket<br /> as we have different plans 
                for categories of customers.<br/> This is outlined in detail below.
               </p>
               <button className='btn-learn'>Learn More</button>
            </div>

           
         {/*  <div data-aos= "fade-left" data-aos-duration = "1600" className='text-content'>
                   <h2>The number one company that offers the best cleaning services</h2>
                   <svg className='background-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#fff" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,181.3C384,181,480,139,576,117.3C672,96,768,96,864,85.3C960,75,1056,53,1152,80C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
         
    </div> */}
                
        </div>
    )
}

export default Background;