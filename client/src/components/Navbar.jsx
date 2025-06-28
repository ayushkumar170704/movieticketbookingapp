import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const handleNavClick = (to) => {
    window.scrollTo(0, 0)
    setIsOpen(false)
  }

  const { user } = useUser()
  const { openSignIn } = useClerk()
  const navigate = useNavigate()

  return (
    <div className='fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur-md shadow-md'>
      <div className='flex items-center justify-between px-6 md:px-16 lg:px-36 py-4'>
        
        {/* Logo */}
        <Link to='/' className='flex-shrink-0'>
          <img src={assets.logo} alt="Logo" className='w-36 h-auto' />
        </Link>

        {/* Desktop Menu Links */}
        <div className='hidden md:flex items-center gap-8'>
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
              className={`text-white hover:text-primary transition-colors duration-200 ${
                isActive(item.to) ? 'border-b-2 border-primary pb-1' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right-side icons and button */}
        <div className='flex items-center gap-4'>
          <SearchIcon className='hidden md:block w-6 h-6 cursor-pointer text-white hover:scale-110 transition-transform duration-200' />
          
          {/* Authentication Button/UserButton */}
          {!user ? (
            <button 
              onClick={openSignIn} 
              className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition-colors duration-200 rounded-full font-medium text-white cursor-pointer shadow-sm'
            >
              Login
            </button>
          ) : (
            <UserButton afterSignOutUrl="/">
              <UserButton.MenuItems>
                <UserButton.Action 
                  label="My Bookings" 
                  labelIcon={<TicketPlus width={15} height={15} />} 
                  onClick={() => navigate('/my-bookings')}
                />
              </UserButton.MenuItems>
            </UserButton>
          )}
          
          {/* Mobile Menu Icon */}
          <MenuIcon
            className='md:hidden w-8 h-8 cursor-pointer text-white hover:scale-110 transition-transform duration-200'
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className='md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg z-40'>
          <div className='flex flex-col items-center justify-center h-full gap-8 text-lg font-medium'>
            
            {/* Close Icon for Mobile */}
            <XIcon
              className='absolute top-6 right-6 w-8 h-8 cursor-pointer text-white hover:scale-110 transition-transform duration-200'
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Navigation Links */}
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
                className={`text-white hover:text-primary transition-colors duration-200 text-center ${
                  isActive(item.to) ? 'border-b-2 border-primary pb-1' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Search Icon */}
            <SearchIcon className='w-8 h-8 cursor-pointer text-white hover:scale-110 transition-transform duration-200 mt-4' />
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar