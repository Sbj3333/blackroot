
import React, { useState } from 'react'
import Background from './Background'
import  {auth, db}  from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    

    const handleRegister = async(e) =>{
        e.preventDefault();
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await addDoc(collection(db, 'users'),{
              uid: user.uid,
              username: username
            });
            console.log("registered succesfully")
        }catch(error){
            console.log("error registering", error);
        }
    };

  return (
    <div className='relative'>
        <Background/>
        <div className='absolute items-center justify-center top-1/3 left-1/2 translate-y-1/3 -translate-x-1/2'>
            <div className='h-[55vh] w-[30vw] bg-[#ffffff] flex flex-col  items-center rounded-3xl'>
                <div className='text-[#000000] text-3xl font-extrabold mt-[25px]  font-mono'>Welcome</div>
                <div className='text-[#000000] text-xl mt-4'>Register</div>
                <form className='flex flex-col mt-[5vh] gap-5 items-center' onSubmit={handleRegister}>
                    <input placeholder='Username' type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <input placeholder='Enter Your Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input placeholder='Enter Your Secret Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <button className='bg-[#0f15d3] h-9 w-[10vw] text-white rounded-3xl' type='submit'>Let's say Hello !</button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Register