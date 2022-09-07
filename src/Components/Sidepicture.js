import React from 'react';
import './Sidepicture.css'

function Sidepicture(){
    return(
        <div className='side-bar'>
        <img className='pix' src ={ require('./assets/clening-pix.jpg').default} alt='cleaning' />

    
    </div>
    )   
    
    }


export default Sidepicture;