import React, {useEffect, useState} from 'react'
import './Subscription.css'
import AOS from "aos"
import "aos/dist/aos.css"
import 'tachyons'

function Subscription(){

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    })

    const [background, setBackground] = useState(true)

    const colorChange = ()=>{
        setBackground(false)
    }


    return(
        <div className='subscription-header'>
           <h1 className='payment-header-top'>Payment-Plans</h1>
           <h4 className='payment-info'>The plans below are suitable for Company or industry owners. Household and laundry plans <br/>
           can be accessed when you create a profile with us. <br/>
           Create an account with us to discover our mouth-watering offers!</h4>

           <div className='payment-boxes'>
               <div className='grow'>
               <div data-aos = "fade-right" data-aos-duration = "1000" className={background? 'box-one' : 'box-one-change'} onClick={colorChange}>
                   <h1 className='payment-header'>Basic</h1>
                   <hr/>
                   <div className='price'>$42.5</div>
                   <div className='word-content'>
                       Subscribe monthly<br/> and get an extra cleaning<br/> service day as bonus
                   </div>
                   <button className='btn-secondary'>Subscribe</button>
                   </div>
               </div>

            <div className='grow'>
            <div data-aos ="fade-up" data-aos-duration = "1500" className ="box-two">
                <h1 className='payment-header'>Premium</h1>
                <hr/>
                   <div className='price'>$65.3</div>
                   <div className='word-content'>
                       Subscribe quarterly <br/>and get an extra cleaning<br/> service week free as bonus
                   </div>
                   <button className='btn-secondary'>Subscribe</button>

                </div>

            </div>
               
            <div className='grow'>
            <div data-aos ="fade-right" data- aos-duration = "1200" className='box-three'>
                <h1 className='payment-header'>Advanced</h1>
                <hr/>
                   <div className='price'>$98.7</div>
                   <div className='word-content'>
                       Subscribe yearly<br/> and get two extra cleaning<br/> service weeks free as bonus
                   </div>
                   <button className='btn-secondary'>Subscribe</button>

                </div>

            </div>
             
           </div>
        </div>

    )
}

export default Subscription;