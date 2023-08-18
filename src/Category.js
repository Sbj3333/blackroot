import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import News from './News'

const Category = () => {
  return (
    <div className='h-200vh w-full '>
        <News category="Health" articleCount={5}/>
    </div>
  )
}

export default Category