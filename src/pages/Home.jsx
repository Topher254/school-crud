import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { Link } from 'react-router'

const Home = () => {
  const [students, setStudents] = useState("")


  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch('http://localhost:5000/students');
        const data = await res.json();
        // console.log("data", data);
        setStudents(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchStudents();
  }, []);


  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">Student Records</h1>

      <div className="bg-white border shadow rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-600">All Students</h2>
          <Link to={'/create'}>
            <Button variant="primary" bsize="md">Add New</Button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2 text-left text-gray-600 font-medium">ID</th>
                <th className="border px-4 py-2 text-left text-gray-600 font-medium">Name</th>
                <th className="border px-4 py-2 text-left text-gray-600 font-medium">Place</th>
                <th className="border px-4 py-2 text-left text-gray-600 font-medium">Phone</th>
                <th className="border px-4 py-2 text-left text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                students &&
                students.map((item) => (
                  <tr key={item.id} className={`transition ${item.id % 2 === 0 ? 'bg-green-100 hover:bg-green-200' : 'hover:bg-gray-50'
                    }`}>
                    <td className="border px-4 py-2">{item.id}</td>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">{item.place}</td>
                    <td className="border px-4 py-2">{item.phone}</td>
                    <td className="border flex px-4 py-2 space-x-2">
                      <Link to={'/view/:id'}> <Button variant="primary" bsize="sm">View</Button></Link>
                      <Link to={'/edit/:id'}> <Button variant="second" bsize="sm">Edit</Button></Link>
                      <Button variant="danger" bsize="sm">Delete</Button>
                    </td>
                  </tr>

                ))

              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
