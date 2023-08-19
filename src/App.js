import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Register from './Register'


const App = () => {
  return (
    <div className='flex flex-col'>
      <Routes>
        <Route path = '/' Component={Home}/>
        <Route path ='/login' Component={Login}/>
        <Route path='/register' Component={Register}/>
      </Routes>
    </div>
  )
}

export default App