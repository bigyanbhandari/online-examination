import React from 'react'


import {  Link } from 'react-router-dom';
import logo from "../assests/download.jpg"

const Navbar = () => {
  return (
    <div className=' bg-blue-500  h-[60px] m-0 p-0 '>
       
     <nav className='flex justify-center justify-around sticky '>
        <div className='text-4xl font-bold text-white font-mono '> 
        <Link to='/home'>
          <diV className='flex gap-5 items-center'>
          <img src={logo} className='h-[50px] w-[50px] bg-none'/>
          <span>OES</span>
          </diV>
          </Link></div>

        <div className='flex '>
            <ul className='flex  font-mono gap-[40px] text-white text-lg font-medium items-center p-3 '>
            <li>
           <Link to='/admin'> Admin</Link>
            </li>
            <li>
            <Link to='/teacher'>Teacher </Link> 
            </li>
            <li>
             <Link to='/student'>Student</Link>   
            </li>
            <li>
               <Link to='/contact'>Contact</Link> 
            </li>
            </ul>
        </div>
     </nav>
     
    </div>
  )
}

export default Navbar



