import React from 'react'
 
const RegisterBox = () => {
    return (
        <>

              
        <div className="registerbox content active-content"> 
        <h5 className='display-3 text-center btn-lg '>   Register Here </h5>
        <form action="">
           <div className="form">
           <button type='button'> <i className='fa fa-user'></i>  </button>
           <input type="text"  placeholder='Username' />
           </div>

           <div className="form">
           <button type='button'> <i className='fa fa-id-card'></i>  </button>
           <input type="number"  placeholder='CNIC eg. (Without Dash)' />
           </div>

           <div className="form">
           <button type='button'> <i className='fa fa-key'></i>  </button>
           <input type="password"  placeholder='Password' />
           </div>

           <div className="form">
           <button type='button'> <i className='fa fa-key'></i>  </button>
           <input type="password"  placeholder='Confim Password' />
           </div>

           <input type="submit" value="Register" className='btn btn-success w-100' />
           <span className="d-flex justify-content-end"> <a href="#" className='nav-link text-right '> Forgot Password </a> </span>
            

         </form>
         </div>

        
        </>
    )
}

export default RegisterBox
