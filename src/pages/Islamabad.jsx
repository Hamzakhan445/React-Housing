import React, {useState} from 'react'
import Header from '../HomeComp/Header'
import Footer from '../HomeComp/Footer'
import MainHeading from '../HomeComp/MainHeading' 
import KhyberData from '../HomeComp/KhyberData' 

const Khyber = () => {

  const data = KhyberData.map((res)=>{
     return(
      <div className="house_box">
      <img src={res.img} alt="house_img" />

      <div className="housedata">
      <h5> {res.title} </h5>
      <h5> {res.subtitle} </h5>
      <button type='button' className='btn btn-success' data-bs-target="#details" data-bs-toggle="collapse"> Details </button>
   
      </div>
      </div>
     )
  })
    
     return (
        <>
        <Header />
        <div className="khyber mt-5 p-5">
          <MainHeading text="HOUSES IN ISLAMABAD CITY" />

          <div className="house_wrapper">
            {data}
          </div>



          </div>
          <Footer />
        </>
    )
}

export default Khyber


