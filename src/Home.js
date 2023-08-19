import React from 'react'
import Navbar from './Navbar'
import Carous from './Carous'
import Category from './Category'
import Calci from './Calci'
import landing from './assets/landing.jpeg'


const Home = () => {
  return (
    <div className='h-auto'>
        <Navbar/>
        <img src={landing} className='h-[100vh] w-full object-contain m-0 p-0'/>
        <Carous/>
        <Category/>
        <Calci/>
    </div>
    
  )
}

export default Home