import React from 'react'
import Menu from './Menu'

function Header() {
  return (
    <header className='w-full py-8'>
      <div className="container mx-auto flex items-center justify-between">
        <img src="" alt="ecommerce logo" />
        <Menu/>
      </div>      
    </header>
  )
}

export default Header