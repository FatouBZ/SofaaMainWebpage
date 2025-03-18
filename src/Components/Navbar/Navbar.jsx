'use client'
import React, { useState, useEffect } from 'react'
import { navbarData } from '../DataForPage/DummyData'
import { Link } from 'react-scroll'
const NavbarComponent = () => {
  const [scroll, setScroll] = useState(false)
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scroll])
  return (
    <div>
      <div
        className={
          scroll
            ? 'h)16 w-full fixed transition items-center ease-in-out duration-500 bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20'
            : 'bg-transparent h-16 w-full fixed transition items-center ease-in-out duration-500 flex z-20 '
        }
      >
        <div className="grid grid-cols-2 justify-items-center content-center w-full">
          <div className='pl-20 w-4/5'> 
            <img className="h-10" src="" alt="logo-img" />
          </div>
          <div className="flex flex-row items-center w-full">
            {navbarData.map((item) => {
              return (
                <div key={item.id}>
                  <Link
                    to={item.link}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    isDynamic={true}
                    spyThrottle={500}
                    className="cursor-pointer text-dark font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-[#219595]"
                  >
                    {' '}
                    {item.name}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponent
