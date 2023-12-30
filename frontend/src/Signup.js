import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 '>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Sign up</h2>
        <form action=''>
        <div className='mb-3'>
                <label><strong>Name</strong></label>
                <input type='text' placeholder='Enter Name' className='form-control '/>
            </div>
            <div className='mb-3'>
                <label><strong>Email</strong></label>
                <input type='email' placeholder='Enter Email' className='form-control '/>
            </div>
            <div className='mb-3'>
                <label><strong>Password</strong></label>
                <input type='password' placeholder='Enter Password'className='form-control '/>
            </div>
            <button className='btn btn-success w-100'><strong>Sign up</strong></button>
            <p>You agree to our terms and policy</p>
            <Link to="/login" className='btn btn-default border w-100 bg-light'>Log in</Link>

        </form>
    </div>

</div> 
  )
}

export default Signup