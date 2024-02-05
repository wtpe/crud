import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Create = () => {
    const handleAdd = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8081/student',values)
        .then(res=>{
            console.log(res);
            navigate('/');
        })
        .catch(err=>console.log(err))
    }
    const navigate= useNavigate()
    const[values,setValues]=useState({  
        name:'',
        email:''
    })
  return (
    <div className='d-flex mt-10 justify-content-center align-items-center '>
      <div>
        <form onSubmit={handleAdd}>
            <h2>Add Student</h2>
            <div className='mb-2'>
                <lable htmlFor='name'>Name</lable>
                <input type='text' placeholder='enter Name' className='form-control' onChange={e=> setValues({...values,name:e.target.value})}></input>
            </div>
            <div className='mb-2'>
                <lable htmlFor=''>Email</lable>
                <input type='text' placeholder='enter Email' className='form-control' onChange={e=>setValues({...values,email:e.target.value})}></input>
            </div>
            <button className='btn btn-primary' >Add</button>
        </form>
      </div>
    </div>
  )
}

export default Create
