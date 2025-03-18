'use client'
import React from 'react'
import header1 from "../../assets/images/headerImage.png"
const Header = () => {
  return (
    <div className="mx-auto pt-16">
      <div className="grid grid-cols-2 justify-items-center items-center">
        <div className="w-4/5 pl-24">
        <h1 className='text-5xl font-russoOne font-medium no-underline align-middle tracking-wide normal-case leading'>
        High-End Fresh {""}
        <span className='text-dark text-6xl font-petitFormal font-bold'>
           Furniture {""}
        </span>
        Mobile App
        </h1>
        <div className="mt-4">
         <p className='w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark'>
          </p> Giving your home a proper makeover never was this easy. Modern and stylish furniture for decent prices. Take a look at what we offer with a simple button click
        </div>
        <div className="pb-20">
          <button className='pushable mt-4'>
            <span className='front '> Start Now</span>
          </button>
        </div>
        </div>
        <div className="mt-4">
          <div>
          <h2 className='text-5xl pb-4 font-russoOne font-medium no-underline align-middle tracking-wide normal-case leading'>Modern Design</h2>
          </div>
        <img className="h-[765px] w-full bg-no-repeat bg-center relative z-10 header rounded-xl" src={header1} alt="header-phone" />
        </div>
      </div>
    </div>
  )
}

export default Header
