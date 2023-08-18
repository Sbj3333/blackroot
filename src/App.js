import React from 'react'
import Navbar from './Navbar'
import Carous from './Carous'
import Category from './Category'


const App = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Carous/>
      <Category/>
    </div>
  )
}

export default App