import React from 'react'
import Menu from './Menu'
import logo from "../assets/images/tienda-online.png"

function Header() {
  return (
    <header className='w-full py-4'>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#/">
          <img src={logo} alt="logo" />
        </a>
        <Menu/>
      </div>      
    </header>
  )
}

export default Header