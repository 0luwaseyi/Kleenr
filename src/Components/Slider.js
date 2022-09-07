import React, {useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/swiper-bundle.min.css"
import "swiper/swiper.min.css"
import './Slider.css'
import AOS from "aos"
import "aos/dist/aos.css"
import SwiperCore, {Autoplay, Pagination} from "swiper"


SwiperCore.use([Autoplay, Pagination])

function Slider(){

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])

    return(
        <div className='slider-content'>
            <h1 className='testimonial-header'>Testimonials</h1>
            <h5 className='slider-footnote'>Kleenr has worked with so many clients, serving them tirelessly with nothing but the best  over the years <br/>
            Here's what our clients say about us</h5>
              <Swiper
        data-aos = "fade-up"
        data-aos-duration = "1200" 
        spaceBetween={100}
        slidesPerView = {"auto"}
        loop ={true}
        effect = {"flip"}
        pagination = {true}
        autoplay = {true}
        className = "mySwiper"
        onSlideChange = {()=> console.log('slide change')}
        onSwiper = {(swiper) => console.log(swiper)}>
            

            <SwiperSlide data-swiper-autoplay = "8000">
            <img className='border' alt='Failed to load' src = {require("./assets/ceo-one.jpg").default}></img>
                
                 <p className='slider-style' >Kliener is an efficient and reliable cleaning<br /> company
        aimed at providing to the vast populace of Nigeria, <br /> the seamless
        ease of keeping your <br /> house, school or industries sparkling clean.</p></SwiperSlide>
            
            <SwiperSlide data-swiper-autoplay = "8000">
                <img className='border' alt='Failed to load' src= {require("./assets/ceo-two.jpg").default}></img> <p className='slider-style' >Kliener is an efficient and reliable cleaning<br /> company
        aimed at providing to the vast populace of Nigeria, <br /> the seamless
        ease of keeping your <br /> house, school or industries sparkling clean.</p></SwiperSlide>
            
            <SwiperSlide data-swiper-autoplay = "8000">
                <img className='border' alt='Failed to load' src={require('./assets/qsurv.jpg').default}></img> <p className='slider-style' >Kliener is an efficient and reliable cleaning<br /> company
        aimed at providing to the vast populace of Nigeria, <br /> the seamless
        ease of keeping your <br /> house, school or industries sparkling clean.</p></SwiperSlide>
            
            <SwiperSlide data-swiper-autoplay = "8000">
                <img className='border' alt='Failed to load' src={require('./assets/team member.jpg').default}></img> <p className='slider-style' >Kliener is an efficient and reliable cleaning<br /> company
        aimed at providing to the vast populace of Nigeria, <br /> the seamless
        ease of keeping your <br /> house, school or industries sparkling clean.</p></SwiperSlide>

        
        </Swiper>

        </div>
      


    )
}

export default Slider;