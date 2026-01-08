import React from 'react'

function Navbar() {
  return (
    <nav className='bg-black'>
        <ul className='flex justify-center items-center gap-6 py-4 px-4'>
            <li className='hover:bg-blue-700 px-6 py-2 rounded-lg transition-all duration-200 cursor-pointer'>
                <h1 className='text-white text-lg font-bold'>Home</h1>
            </li>
            <li className='hover:bg-blue-700 px-6 py-2 rounded-lg transition-all duration-200 cursor-pointer'>
                <h1 className='text-white text-lg font-bold'>ADD User</h1>
            </li>
            <li className='hover:bg-blue-700 px-6 py-2 rounded-lg transition-all duration-200 cursor-pointer'>
                <h1 className='text-white text-lg font-bold'>User Details</h1>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar