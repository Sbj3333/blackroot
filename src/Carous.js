import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel  from 'react-bootstrap/Carousel'
import  image  from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'
import image4 from './assets/image4.jpeg'
import image5 from './assets/image5.jpeg'

const Carous = () => {
  return (
    <div className='d-block bg-[#161c2e] object-contain'>
        <Carousel>
            <Carousel.Item interval={3000}>
                <img src={image} alt='whatever' className=' d-inline h-[90vh] w-full object-contain'/>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={image2} alt='whatever' className=' d-inline h-[90vh] w-full object-contain'/>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={image3} alt='whatever' className=' d-inline h-[90vh] w-full object-contain'/>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={image4} alt='whatever' className=' d-inline h-[90vh] w-full object-contain'/>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={image5} alt='whatever' className=' d-inline h-[90vh] w-full object-contain'/>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Carous