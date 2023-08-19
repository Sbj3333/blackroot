import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Register from './Register'
import Comment from './Comment'
import Category from './Category'


const App = () => {
  return (
    <div className='flex flex-col'>
      <Routes>
        <Route path = '/' Component={Home}/>
        <Route path ='/login' Component={Login}/>
        <Route path='/register' Component={Register}/>
        <Route path='/comment' Component={Comment}/>
        <Route path='/news' Component={Category}/>
        {/* <Route path='/profile' Component={Profile}/> */}
      </Routes>
    </div>
  )
}

export default App