import React from 'react'
import Body from './Body';
import Hire from './Hire'
import Background from './Background';
import Brands from './Brands';
import Subscription from './Subscription';
import Footer from './Footer'
import Slider from './Slider'

function Routers(){
    return(
        <div>
              <Body />
            <Hire />
            <Background />
            <Brands/>
            <Subscription/>
            <Slider/>
            <Footer/>
        </div>
    )
}
 export default Routers;