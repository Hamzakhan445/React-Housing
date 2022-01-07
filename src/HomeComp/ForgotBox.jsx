import React from 'react'

const ForgotBox = () => {
    return (
        <>
        <div className="forgotbox content active-content">
            <p> Enter your email address below and we'll send you an email with instructions. <br/>
           <strong> Need Help? </strong> Learn more about how to retrieve an existing account.
            </p>

            <form action="">
            <div className="form">
            <button type='button'> <i className='fa fa-envelope'></i>  </button>
            <input type="email"  placeholder='Email' />
            </div>
            
          <input type="submit" value="Reset" className='btn btn-success w-100' />
  
            </form>
            </div>
        </>
    )
}

export default ForgotBox
