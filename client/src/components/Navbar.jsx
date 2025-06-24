import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const handleNavClick = (to) => {
    window.scrollTo(0, 0)
    setIsOpen(false)
  }

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-4 bg-black/80 backdrop-blur-md shadow-md'>
      
      {/* Logo */}
      <Link to='/' className='max-md:flex-1'>
        <img src={assets.logo} alt="Logo" className='w-36 h-auto' />
      </Link>

      {/* Menu Links */}
      <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:h-screen max-md:w-full 
        max-md:bg-black/90 max-md:backdrop-blur-lg max-md:rounded-md 
        md:static md:bg-transparent md:flex md:flex-row md:items-center 
        max-md:flex-col max-md:justify-center max-md:font-medium max-md:text-lg 
        gap-8 py-3 overflow-hidden transition-all duration-300 
        ${isOpen ? 'flex' : 'hidden'} md:flex`}>

        {/* Close Icon for Mobile */}
        <XIcon
          className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer text-white hover:scale-110 transition'
          onClick={() => setIsOpen(false)}
        />

        {/* Navigation Links */}
        {[
          { to: '/', label: 'Home' },
          { to: '/movies', label: 'Movies' },
          { to: '/theaters', label: 'Theaters' },
          { to: '/releases', label: 'Releases' },
          { to: '/favorite', label: 'Favorites' },
        ].map((item) => (
          <Link
            key={item.label}
            to={item.to}
            onClick={() => handleNavClick(item.to)}
            className={`text-white hover:text-primary transition ${
              isActive(item.to) ? 'border-b-2 border-primary pb-1' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Right-side icons and button */}
      <div className='flex items-center gap-4 md:gap-6'>
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer text-white hover:scale-110 transition' />
        <button className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium text-white cursor-pointer shadow-sm'>
          Login
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <MenuIcon
        className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer text-white hover:scale-110 transition'
        onClick={() => setIsOpen(true)}
      />
    </div>
  )
}

export default Navbar
