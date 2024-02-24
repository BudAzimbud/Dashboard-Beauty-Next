import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoArrowBackCircleSharp } from "react-icons/io5"
function Notfound() {
  return (
    <div className='text-center text-primary flex items-center justify-center h-[100vh]'>
      <div>
      <h2 className='flex items-center gap-1  text-2xl '>Oops!!! Page Not Found <CiSearch /></h2>
      <a href='/' className='text-center text-gray-500 flex items-center justify-center'>Go Back <IoArrowBackCircleSharp /></a>
      </div>
    </div>
  )
}

export default Notfound