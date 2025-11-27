import React from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {

  const[navMenu,setNavMenu]= useState(false);

  const menuToggle=()=>{
    setNavMenu(!navMenu);
  }
   
  const activeLink = ({ isActive }) =>
  isActive
    ? "text-cyan-400 font-semibold  border-cyan-400 m-1"
    : "hover:text-cyan-600 m-1";


  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-sm bg-white/5 border-b border-white/20 z-50">

    <div className='p-3 m-2 w-full bg-transparent flex  justify-between'>
      <Link to="/"> 
       <div>
        <h1 className='text-4xl md:text-6xl font-bold mb-4l flex-nowrap whitespace-nowrap text-white'>Cybredge Pvt Ltd.</h1>
       </div>
       </Link>
       <div className='mr-16 relative flex items-center gap-4 md:gap-8'>

        <nav
  className={`${navMenu
    ? "flex flex-col absolute top-16 right-0 bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 z-50 transition-all duration-300 ease-in-out"
    : "hidden"
  } md:flex md:static md:flex-row text-lg gap-4 p-2 text-white`}
>
          {/* Navigation Links */}
          <NavLink className={activeLink} to="/">Home</NavLink>
          <NavLink className={activeLink} to="/about">About</NavLink>
          <NavLink className={activeLink} to="/services">Services</NavLink>
          <NavLink className={activeLink} to="/portfolio">Portfolio</NavLink>
          <NavLink className={activeLink} to="/team">Team</NavLink>
          <NavLink className={activeLink} to="/blog">Blog</NavLink>
          <NavLink className={activeLink} to="/contact">Contact</NavLink>
          <div className="relative group">

  {/* MAIN BUTTON */}
  <button className="text-white hover:opacity-90 flex items-center gap-1 font-semibold  text hover:text-cyan-600 m-1">
    Services ▾
  </button>

  {/* GLASS DROPDOWN */}
  <div
    className="
      absolute  hidden group-hover:block 
      mt-2 w-52 py-3 rounded-xl
      backdrop-blur-xl bg-white/10
      border border-white/20 shadow-lg
      transition-all duration-300 z-50
      justify-items-center items-center
      left-1/2 -translate-x-1/2
    "
  >
    <Link
      to="/web-development"
      className="block px-4 py-2 text-white hover:bg-white/20 rounded-lg transition"
    >
      Web Development
    </Link>

    <Link
      to="/cyber-security"
      className="block px-4 py-2 text-white hover:bg-white/20 rounded-lg transition"
    >
      Cyber Security
    </Link>

    <Link
      to="/ai-automation"
      className="block px-4 py-2 text-white hover:bg-white/20 rounded-lg transition"
    >
      AI Automation
    </Link>
  </div>
</div>

        </nav>
        <button className='h-9 w-28 backdrop-blur-md hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]
  text-white border border-white/20 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300'>
    Get Started
  </button>
        <div className='menu md:hidden text-white text-3xl'>
          <button onClick={menuToggle}>
          <GiHamburgerMenu/>
          </button>
         </div>
       </div>
    </div>
    </header>
  )
}

export default Navbar