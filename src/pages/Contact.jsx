import React from 'react'
import Footer from '../HomeComp/Footer'
import Header from '../HomeComp/Header'
import MainHeading from '../HomeComp/MainHeading'

const Contact = () => {
    return (
        <>
        <Header />
        <div className="container-md p-5 mt-5">
        <div className="row align-items-center justify-content-between ">

        <div className="col-lg-5">
            <p className='pb-2'> Do you know anybody, any single person who gets excited at the thought of helping others?            </p>
          
            <p className='pb-2'>Well, we do… that’s us! While others get bummed when asked for help, we get pumped to serve you! Team Zameen is ever ready to help you every step of the way. We’ve deployed dedicated 
            resources to assist, guide, attend and answer your queries throughout the week.</p>
      

            <p className='pb-2'>Zameen.com is head-quartered in Lahore but we have offices in Karachi and 
            Islamabad as well. You can reach us via phone, email or walk right into any of our offices and we would be more than glad to help you.</p>
      
                <MainHeading text="ASK US ANYTHING" />
             <form className='mt-4'>
                <input type="text" className='form-control  mb-3 p-3' placeholder='Name'  />
                <input type="email" className='form-control  mb-3 p-3' placeholder='Email'  />
                <input type="number" className='form-control  mb-3 p-3' placeholder='Phone number'  />
                <input type="text" className='form-control  mb-3 p-3' placeholder='Subject'  />
                <textarea  className='form-control  mb-3' placeholder='Message'  rows="7"></textarea>
                <input type="submit" value="SEND MESSAGE" className='btn btn-success w-50 mx-auto' />
                </form>
            </div>

            <div className="col-lg-4 text-center ">
            <MainHeading text="TELEPHONE" />
            <p className='pb-2'>Support is also available via phone, but to get the fastest response 
            please use the email form above. Please do not forget to leave your contact details and email 
            address if using voicemail</p>

            <li> 0306 9129158 </li>
            <li> 0314 3529158 </li>

            </div>
        
        </div>
        </div>
        <Footer />
        </>
    )
}

export default Contact
