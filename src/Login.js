import React, { useState } from 'react'
import Background from './Background'
import  {auth, db}  from './firebase'
import { GoogleAuthProvider } from 'firebase/auth'
import { signInWithPopup } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleLogin = async(e) =>{
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth, email, password);
            console.log("logged in succesfully")
        }catch(error){
            console.log("error loggin in", error); 
        }
    };

    const handleGoogleLogin = async() =>{
        const provider = new GoogleAuthProvider();
        try{
            await signInWithPopup(auth, provider);
            console.log("logged in with google");
        }catch(error){
            console.log("erorr loggin in", error);
        }
    };

  return (
    <div className='relative'>
        <Background/>
        <div className='absolute items-center justify-center top-1/3 left-1/2 translate-y-1/3 -translate-x-1/2'>
            <div className='h-[55vh] w-[30vw] bg-[#ffffff] flex flex-col  items-center rounded-3xl'>
                <div className='text-[#000000] text-3xl font-extrabold mt-[25px]  font-mono'>Welcome</div>
                <div className='text-[#000000] text-xl mt-4'>Login</div>
                <form className='flex flex-col mt-[5vh] gap-5 items-center' onSubmit={handleLogin}>
                    <input placeholder='Enter Your Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input placeholder='Enter Your Secret Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                   
                    <button className='bg-[#0f15d3] h-9 w-[10vw] text-white rounded-3xl'  href='/home'>Let's say Hello !</button>
                  
                </form>
                <button className='bg-[#0f15d3] h-9 w-[10vw] text-white rounded-3xl m-4' onClick={handleGoogleLogin}>Log in with Google</button>

            </div>
        </div>
    </div>
  )
}

export default Login