import React, {useState} from 'react'
import Header from '../HomeComp/Header'
import Footer from '../HomeComp/Footer'
import MainHeading from '../HomeComp/MainHeading' 
import KhyberData from '../HomeComp/KhyberData' 
import { Link } from 'react-router-dom'

const Khyber = () => {

  const data = KhyberData.map((res)=>{
     return(
      <div className="house_box">
      <img src={res.img} alt="house_img" />

      <div className="housedata">
      <h5> {res.title} </h5>
      <h5> {res.subtitle} </h5>
      <Link to="/details"> <button type='button' className='btn btn-success mt-3 w-100'> View Details </button> </Link>
      </div>
      </div>
     )
  })
    
     return (
        <>
        <Header />
        <div className="khyber mt-5 p-5">
          <MainHeading text="HOUSES IN KHYBER AGENCY" />

          <div className="house_wrapper">
            {data}
          </div>



          </div>
          <Footer />
        </>
    )
}

export default Khyber


