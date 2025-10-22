import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='bg-black text-white flex justify-between px-4 py-2'>
     <div>Student Data</div> 
     <div>
       <Button
       variant="danger"
       bsize="sm"
       >Log Out</Button>
    </div>
    </div>
  )
}

export default Navbar
