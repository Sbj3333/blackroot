import React from 'react'
import Packet from './Packet'

const Comment = () => {
  return (
    <div className='bg-[#383f63] h-screen w-screen flex items-center justify-center'>
        <div className='bg-white h-[80vh] w-[80vw] rounded-2xl flex flex-col'>
            <div className='bg-white h-[93%] rounded-t-2xl'>
                <div className=' h-full w-[98%] flex flex-col gap-3 ml-3 overflow-scroll'>
                    <Packet/>
                    <Packet/>
                    <Packet/>
                    <Packet/>
                    <Packet/>
                    <Packet/>
                    <Packet/>
                    <Packet/>
                    <Packet/>
                    <Packet/>
                    <Packet/>
                    <Packet/>
                    <Packet/>
                    
                </div>
            </div>
            <input placeholder='your message here' className='h-8 w-[70vw] ml-8 mt-1 text-black bg-slate-300'></input>
        </div>
    </div>
  )
}

export default Comment