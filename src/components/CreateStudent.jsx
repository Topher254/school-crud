import React, { useState } from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router'
import toast from 'react-hot-toast'

const CreateStudent = () => {
    const [id,setId] = useState('')
    const [name,setName] = useState('')
    const [place,setPlace] = useState('')
    const [phone,setPhone] = useState('')
    const navigate = useNavigate();

const handleSubmit=async(e)=>{
    e.preventDefault();
    const studentData={id,name,place,phone}
try {
    await fetch("http://localhost:5000/students",{
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
      body:JSON.stringify(studentData)
    });
    console.log("response from create",studentData);
    toast.success("student added")
    navigate('/')

    
} catch (error) {
    console.log("error in creating",error.message);
    
}
}

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex justify-center p-4'>
        <div className='bg-gray-50 p-4 rounded-2xl shadow'>
      <h2 className='flex justify-center font-bold border-b my-1'>Add new student</h2>

        <div className='flex flex-col'>
            <label htmlFor='id'>Student Id</label>
            <input value={id} onChange={(e)=>setId(e.target.value)} className='p-2 bg-gray-200 rounded-lg outline-gray-300 text-gray-500' type='text' id='id'name='id' placeholder='Enter student Id'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='name'> Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} className='p-2 bg-gray-200 rounded-lg outline-gray-300 text-gray-500' type='text' id='name'name='name' placeholder='Enter student name'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='place'>Place</label>
            <input value={place} onChange={(e)=>setPlace(e.target.value)} className='p-2 bg-gray-200 rounded-lg outline-gray-300 text-gray-500' type='text' id='place'name='place' placeholder='Enter student place'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor='phone'>Phone</label>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} className='p-2 bg-gray-200 rounded-lg outline-gray-300 text-gray-500' type='number' id='phone'name='phone' placeholder='Enter student phone'/>
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
