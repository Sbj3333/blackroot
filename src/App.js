import React from 'react'
import Navbar from './Navbar'
import Carous from './Carous'
import Category from './Category'
import Calci from './Calci'


const App = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Carous/>
      <Category/>
      <Calci/>
    </div>
  )
}

export default App