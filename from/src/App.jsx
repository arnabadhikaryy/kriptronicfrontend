import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('')
  const [roll, setRoll] = useState('')
  const [className, setClassName] = useState('')
  const [department, setDepartment] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      name,
      roll,
      class: className,
      department,
    }

    try {
      const response = await axios.post('http://localhost:9000/user', data, {
        headers: {
          'Content-Type': 'application/json', // You can skip this if axios automatically detects it
        },
      });
    
      if (response.status === 201) {
        alert('Data submitted successfully');
      } else {
        alert('Failed to submit data');
      }
    } catch (error) {
      alert('Error: ' + error.message)
    }
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-gray-700 font-semibold">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      
      <div>
        <label htmlFor="roll" className="block text-gray-700 font-semibold">Roll:</label>
        <input
          type="text"
          id="roll"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          required
          className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
  
      <div>
        <label htmlFor="class" className="block text-gray-700 font-semibold">Class:</label>
        <input
          type="text"
          id="class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          required
          className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
  
      <div>
        <label htmlFor="department" className="block text-gray-700 font-semibold">Department:</label>
        <input
          type="text"
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
          className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
  
      <button
        type="submit"
        className="w-full mt-4 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  </div>
  
  )
}

export default App
