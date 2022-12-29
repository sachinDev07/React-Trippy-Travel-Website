import React, { useState } from 'react'
import './navbar.scss'
import { data } from './ListData'


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(true)

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className={'navbar ' + (menuOpen && "active")} id='navbar'>
        <h1 className='navbar__logo'>Trippy</h1>
        <ul className={menuOpen ? "navbar__menu active" : "navbar__menu"} >
            {data.map((d)=>(
                <li className={d.cName}><i className={d.icon}></i> {d.title}</li>
            ))} 

            <button>Sign Up</button> 
        </ul>
        <div menuOpen={menuOpen} onClick={()=>handleClick()} className="hamburger">
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
        </div>
    </nav>
  )
}

export default Navbar
