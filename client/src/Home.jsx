import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err=> console.log(err))
    },[])
  return (
    <div className='d-flex mt-10 justify-content-center align-items-center'>
        <div className=''>
        <h2><center>List student</center></h2>
        <Link to='/create' className='btn btn-primary'>New +</Link>
      <table className='table'>
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
            {data.map((student,index)=>{
                return <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.Name}</td>
                    <td>{student.Email}</td>
                    <td>
                        
                        <button className='btn btn-sm btn-primary'> Edit</button>
                        <button className='btn btn-sm btn-danger'>Delete</button>
                    </td>
                </tr>
            })}
        </tbody>
      </table>
      </div>
      <p>Thanh</p>
    </div>
  )
}

export default Home
