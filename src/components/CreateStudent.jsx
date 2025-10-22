import React, { useState } from 'react'
import Button from './Button'
import { Link } from 'react-router'

const CreateStudent = () => {
    const [id,setId] = useState('')
  return (
    <div>
      <form className='flex justify-center p-4'>
        <div className='bg-gray-50 p-4 rounded-2xl shadow'>
      <h2 className='flex justify-center font-bold border-b my-1'>Add new student</h2>

        <div className='flex flex-col'>
            <label htmlFor='id'>Student Id</label>
            <input className='p-2 bg-gray-200 rounded-lg outline-gray-300 text-gray-500' type='text' id='id'name='id' placeholder='Enter student Id'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='name'> Name</label>
            <input className='p-2 bg-gray-200 rounded-lg outline-gray-300 text-gray-500' type='text' id='name'name='name' placeholder='Enter student name'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='place'>Place</label>
            <input className='p-2 bg-gray-200 rounded-lg outline-gray-300 text-gray-500' type='text' id='place'name='place' placeholder='Enter student place'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='phone'>Place</label>
            <input className='p-2 bg-gray-200 rounded-lg outline-gray-300 text-gray-500' type='number' id='phone'name='phone' placeholder='Enter student phone'/>
        </div>
        <div className='flex justify-between py-2'>
        <Link to={'/'}><Button variant="danger">Back</Button></Link>
        <Button variant="second">Save</Button>

        </div>
        </div>
        
      </form>
    </div>
  )
}

export default CreateStudent
