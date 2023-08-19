import React from 'react'
import { Auth } from 'firebase/auth'
import { db } from './firebase'
import { getDocs } from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'
import { collection } from 'firebase/firestore'

const Navbar = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
      const fetchUsername = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'users'));
          querySnapshot.forEach((doc) => {
            // Assuming each document has a 'username' field
            setUsername(doc.data().username);
          });
        } catch (error) {
          console.error('Error fetching username:', error);
        }
      };
  
      fetchUsername();
    }, []);
    
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
                    <button href='/profile'>Profile</button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar