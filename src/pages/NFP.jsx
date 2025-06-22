import React from 'react'
import { Link } from 'react-router-dom'

const NFP = () => {
  return (
    <div className='flex flex-col justify-center items-center border border-black rounded-xl p-3'>
        <h3 className="text-center text-2xl text-[red]">404</h3>
        <p className="text-center text-xl text-[yellow]">Page Not Found</p>
        <Link to='/' className='text-blue-400 font-bold'>Go Back to Home Page</Link>
    </div>
  )
}

export default NFP