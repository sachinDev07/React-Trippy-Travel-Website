import React, { useState } from 'react'
import './navbar.scss'
import { data } from './ListData'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className={'navbar ' + (menuOpen && "active")} id='navbar'>
        <h1 className='navbar__logo'>Trippy</h1>
        <ul className={menuOpen ? "navbar__menu active" : "navbar__menu"} >
            {data.map((d)=>(
                <li>
                <Link to={d.url} key={d.title} className={d.cName}><i className={d.icon}></i> {d.title}</Link>
                </li>
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
