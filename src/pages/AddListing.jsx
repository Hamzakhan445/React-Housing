import React from 'react'
import Footer from '../HomeComp/Footer'
import Header from '../HomeComp/Header'

const AddListing = () => {
    return (
        <>
            <Header />

            <div className="addlist m-5 ">
            <div className="container-md p-5 mx-auto ">
            <div className="row justify-content-center w-100 ">
                <div className="col-lg-5 m-3 ">
                <h5>  Details & Description </h5>
                <form action="">
                <select  className='form-control p-3 mb-3'>
                <option> Select City </option>
                    <option value="Khyber"> Khyber </option>
                    <option value="Karachi"> Karachi </option>
                    <option value="Lahore"> Lahore </option>
                    <option value="Sialkot"> Sialkot </option>
                    <option value="Islamabad"> Islamabad </option>
                    <option value="Peshawar"> Peshawar </option>
                </select>
                <input type="text"  placeholder='Type' className='form-control p-3 mb-3' />
                <input type="text"  placeholder='Advance' className='form-control p-3 mb-3' />
                <input type="text"  placeholder='Location' className='form-control p-3 mb-3' />
                <input type="text"  placeholder='Rent' className='form-control p-3 mb-3' />
                <input type="text"  placeholder='Agreement' className='form-control p-3 mb-3' />
                <input type="file" name=""  className='form-ciontrol p-3 mb-3'  />
                <input type="submit" value="Add" className='btn btn-success w-100' />
               
    
    
    
                </form>
                </div>

                <div className="col-lg-5 m-3 ">
                <h5> Facilities </h5>
                <form action="">
                <select  className='form-control p-3 mb-3'>
                <option> Select City </option>
                    <option value="Khyber"> Khyber </option>
                    <option value="Karachi"> Karachi </option>
                    <option value="Lahore"> Lahore </option>
                    <option value="Sialkot"> Sialkot </option>
                    <option value="Islamabad"> Islamabad </option>
                    <option value="Peshawar"> Peshawar </option>
                </select>
                <input type="text"  placeholder='Area' className='form-control p-3 mb-3' />
                <input type="text"  placeholder='Bed' className='form-control p-3 mb-3' />
                <input type="text"  placeholder='Electricity' className='form-control p-3 mb-3' />
                <input type="text"  placeholder='Room(feet)	' className='form-control p-3 mb-3' />
                <input type="text"  placeholder='Sui Gas' className='form-control p-3 mb-3' />
                <input type="text"  placeholder='Water supply' className='form-control p-3 mb-3' />

                 <input type="submit" value="Add" className='btn btn-success w-100' />
               
    
    
    
                </form>
                </div>
            </div>
           
            </div> 
            </div>

            <Footer />
        </>
    )
}

export default AddListing
