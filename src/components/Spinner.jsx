import React from 'react'
import "./Spinner.css"
export const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] w-[100vw]'>
        <div className="Spinner"></div>
        <p className='text-gray-700 font-semibold text-lg'>Loading</p>
    </div>
  )
}
