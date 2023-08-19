import React from 'react'

const Navbar = () => {
  return (
    <div className='top-0 left-0  h-[4vh] text-white w-full bg-[#0a0621]'>
        <div className='justify center'>
            <ul className='flex gap-[20vw] items-center justify-center'>
                <li>
                    <a href='/' >Home</a>
                </li>
                <li>
                    <a href='/news' >News</a>
                </li>
                <li>
                    <a href='/comment' >Chat</a>
                </li>
                <li>
                    <a href='/profile' onClick={alert("this is profile")}>Profile</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar