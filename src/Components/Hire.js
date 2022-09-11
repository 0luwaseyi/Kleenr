import React, {useEffect} from 'react'
import './Hire.css'
import AOS from "aos"
import "aos/dist/aos.css"
import 'tachyons'

function Hire (){

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])
    return(
        <div  className='hire-container'>
               {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#fff" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,181.3C384,181,480,139,576,117.3C672,96,768,96,864,85.3C960,75,1056,53,1152,80C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>*/}
            <h1 className='section-header'><strong>Why Kleenr?</strong></h1>
            <h5 className='slider-footnote'>The Kleenr team is focused on working tirelessly in order to ensure that your desire is achieved<br/>
            Your satisfaction is our priority...</h5>

        <div className='quality-box'>
            <div data-aos = "zoom-in" data-aos-duration = "1500" className='first'>

                

                <div className='icons'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='rgb(119, 2, 21)' d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>

                </div>
                <div className='logo'><h2>Timely Response</h2></div>
              <p className='text-area'>We offer the best laundry and housecleaning services.
              We give you these services at the best affordable rate.</p>
            </div>
            <div data-aos = "zoom-in" data-aos-duration ="1500" className='second'>
                <div className='icons'>
                    
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill='rgb(119, 2, 21)' d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
                </div>
            <div className='logo'><h2>Fast payment</h2></div>
               <p className='text-area'>We offer the best laundry services and house cleaning services
               We give you these services at the best affordable rate.</p>
            </div>
            <div data-aos = "zoom-in" data-aos-duration = "1500" className='third'>
                <div className='icons'>
                    
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='rgb(119, 2, 21)' d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"/></svg>
                </div>
            <div className='logo'><h2>Reliable</h2></div>
               <p className='text-area'>We offer the best laundry and housecleaning services.
               We give you these services at the best affordable rate.</p>
            </div>
            <div data-aos = "zoom-in" data-aos-duration = "1500" className='fourth'>
                <div className='icons'>
                    
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill='rgb(119, 2, 21)' d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm117.8-146.4c-10.2-8.5-25.3-7.1-33.8 3.1-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-60c-25.7 0-55.9 16.9-59.9 42.1-1.7 11.2 11.5 18.2 19.8 10.8l9.5-8.5c14.8-13.2 46.2-13.2 61 0l9.5 8.5c8.5 7.4 21.6.3 19.8-10.8-3.8-25.2-34-42.1-59.7-42.1z"/></svg>
                </div>
            <div className='logo'><h2>Discount offers</h2></div>
                <p className='text-area'>We offer the best laundry and house cleaning services.
                We give you these services at the best affordable rate.</p>
            </div>

        </div>
        </div>
    )
}

export default Hire;