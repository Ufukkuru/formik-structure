import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className='bg-teal-950 p-5'>
            <div className='flex flex-wrap gap-10 w-full justify-center text-center items-center text-xl font-bold text-white'>
                <Link className='hover:scale-105' to='/'>Login</Link>
                <Link className='hover:scale-105' to='/register'>Register</Link>
            </div>
        </div>
    </>
  )
}

export default Navbar