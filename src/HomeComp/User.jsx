import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import LoginBox from '../HomeComp/LoginBox';
import Loginbox from '../HomeComp/LoginBox'

const User = () => {

  
        return (
        <>
        <div className="d-flex align-items-center flex-column h-100 w-100 justify-content-center">
     
        <h5 className='' > Persnol Details * </h5>

        <form action="">
        <div className="row">
            <div className="col-lg-6">
            <label htmlFor=""> Name </label>
        <input type="text" name="" value="admin" className='form-control mb-3 p-2' />
            </div>

            <div className="col-lg-6">
            <label htmlFor=""> Email </label>
        <input type="text" name="" value="admin@gmail.com" className='form-control mb-3 p-2' />
            </div>

            <div className="col-lg-6">
            <label htmlFor=""> Password </label>
        <input type="password" name="" value="1224" className='form-control mb-3 p-2' />
            </div>

            <div className="col-lg-6">
            <label htmlFor=""> New Password </label>
        <input type="password" name="" value="" className='form-control mb-3 p-2' />
            </div>

        </div>

        </form>

        <div className="btn-group w-100 ">
        <Link to="" className="nav-link">
        <button type='button' className='btn btn-success'>    Update Account  </button> 
        </Link>

        <Link to="/listing" className="nav-link">
        <button type='button' className='btn btn-outline-success'>    Your Listing  </button> 
        </Link>

        <Link to="/listing" className="nav-link">
        <button type='button' className='btn btn-outline-success'>    Log out  </button> 
        </Link>


        </div>

        
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci </p>
             </div>
             </>
    )
}

export default User
