import React, {  useContext } from 'react';
import "./Navbar.css"
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';



const Navbar = () => {
const {user, handleLogOut, photo } = useContext(AuthContext)


    const links = <>
<li><NavLink to="/home" className={(({ isActive }) => isActive ? "active" : "")}>HOME</NavLink></li>
<li><NavLink to="/bills" className={({ isActive }) => isActive ? "active" : ""}>PAID BILLS DETAILS</NavLink></li>
<li><NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>PROFILE</NavLink></li>

    </>
    return (
        <div className="navbar shadow-sm w-11/12 rounded-2xl mt-5 bg-orange-50 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {links}
            </ul>
          </div>
          <Link className="font-bold hidden md:block text-[#ff5c15] text-[1.5rem] md:text-[2.7rem]"> Bill's Buddy </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-3">
          <li><NavLink to="/home" className={ (({ isActive }) => isActive ? "active" : "")}>HOME</NavLink></li>
<li><NavLink to="/home/paid_items" className={({ isActive }) => isActive ? "active" : ""}>PAID BILLS DETAILS</NavLink></li>
<li><NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>PROFILE</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">


{
  user ? 
  <div className='flex gap-4'>
  
  <img className="w-10  md:w-12 rounded-full" src={photo} alt="User Avatar" />



 <div className=''
>
 <Link to='/' onClick={handleLogOut} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
               <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                   <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
               </span>
               <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
               <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Log Out</span>
             </Link> 

 </div>
            
  </div>
   

: 

<div className='flex flex-row'> 
  <Link to='/signin' className="mr-5 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
  </span>
  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">sign In</span>
</Link>
      <Link to='/signup' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
  </span>
  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Sign Up</span>
</Link></div> 
}

    


        </div>
      </div>
    );
};

export default Navbar;
// https://i.postimg.cc/5HsfHKvM/receipts.png