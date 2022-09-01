import React from 'react'
// ❃✺

const Navbar = () => {
  return (
    <>
    <div name="top" className='flex flex-nowrap justify-between  items-center w-full h-20 px-6 text-black'>
      <h1 className='cursor-pointer text-2xl font-bold text-[#7f2ba3]'>❈ The Effects Machine ❈</h1>
      <ul className='flex'>
        <li className='text-gray-400 cursor-pointer px-4 font-medium hover:scale-105 duration-200 sm:flex hidden'>About</li>
      </ul>
      </div>
    </>
  )
}

export default Navbar