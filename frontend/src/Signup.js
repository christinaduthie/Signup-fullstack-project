import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './DataValidation'
function Signup() {
    const [values,setValues]= useState({
        name:"",
        email:"",
        password:""
    })
    const [errors,setErrors]=useState({

    })
    const handleInput = (event)=>{
        setValues(prev=>({...prev,[event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        setErrors(Validation(values));
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 '>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Sign up</h2>
        <form action='' onSubmit={handleSubmit}>
        <div className='mb-3'>
                <label><strong>Name</strong></label>
                <input type='text' placeholder='Enter Name' name='name' 
                onChange={handleInput} className='form-control '/>
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div className='mb-3'>
                <label><strong>Email</strong></label>
                <input type='email' placeholder='Enter Email' name='email' 
                onChange={handleInput} className='form-control '/>
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label><strong>Password</strong></label>
                <input type='password' placeholder='Enter Password' name='password' 
                onChange={handleInput} className='form-control '/>
                {errors.password && <span>{errors.password}</span>}
            </div>
            <button type='submit' className='btn btn-success w-100'><strong>Sign up</strong></button>
            <p>You agree to our terms and policy</p>
            <Link to="/login" className='btn btn-default border w-100 bg-light'>Log in</Link>

        </form>
    </div>

</div> 
  )
}

export default Signup