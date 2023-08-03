import React from 'react'
import logo from '../images/react-removebg-preview.png'
import '../style.css'
function Navbar() {
  return (
    <nav>
        <img src={logo} alt='logo' className='nav--icon'/>
        <h2 className='nav--logo_text'>ReactFacts</h2>
        <h3 className='nav--title'>React Course - Project 1</h3>
    </nav>
  )
}

export default Navbar
