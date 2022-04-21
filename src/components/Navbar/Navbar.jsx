import React from 'react'
import "./Navbar.css"
import {useState} from 'react'
import Hamburger from '../Hamburger/Hamburger'

export default function Navbar(){
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const closeHamburger = () =>{
      setHamburgerActive(false);
  }
  const toggleHamburger = () =>{
      setHamburgerActive(!hamburgerActive);
  }
  return ( 
    <nav>
        <div className='left'>
            <div className='profileImage'></div>
            <h1>Fairlady Garage</h1>
        </div>
        <div className='right'>
            <div className='menu' id={hamburgerActive ? "dropdownMenu" : ""}>
              <a onClick={closeHamburger} href=''>Performance</a>
              <a onClick={closeHamburger} href=''>OEM</a>
              <a onClick={closeHamburger} href=''>Contact</a>
              <button><a href=''>Login</a></button>
            </div>
            <div className={hamburgerActive ? "hamburger toggleHamburger" : 'hamburger'} onClick={toggleHamburger}>
                <Hamburger />
            </div>
        </div>
    </nav>
  )
}