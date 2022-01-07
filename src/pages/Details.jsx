import React, {useState,useEffect} from 'react'
import Header from '../HomeComp/Header'
import Footer from '../HomeComp/Footer'
import MainHeading from '../HomeComp/MainHeading'
import Slider from "react-slick";
import axios from 'axios'
 
const Details = () => {

    // const [user, setUser] = useState([]);

    // const getUser = async  () =>{
    //     const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        
    //      setUser(await resp.json());
        
    // }
 
    // useEffect(() => {
    //    getUser();
    // }, [])
 
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1
      };

    return (
        <>
 

         <Header />
        <div className="details_section mt-5  p-5 ">
         <div className="container-md">
         <div className="row justify-content-between align-items-center ">
         
         <div className="col-lg-7">
         <Slider {...settings}>
         <div>
            <img src="../images/img1.jpg" className='sliderimg' alt="" />
         </div>
         <div>
         <img src="../images/img1.jpg" className='sliderimg' alt="" />

          </div>
       </Slider>
         </div>

         <div className="col-lg-4">
         <h4 className='text-center'>  <i className='fa fa-user'></i> MAKE AN ENQUIRY <hr/> </h4>
         <form action="">
          <input type="text" placeholder='Enter your name' className='bg-light form-control mb-3 p-3' />
          <input type="text" placeholder='Enter your CNIC' className='bg-light form-control mb-3 p-3' />
          <input type="text" placeholder='Enter your number' className='bg-light form-control mb-3 p-3' />
         <textarea  placeholder='Message' className='form-control bg-light'  rows="7"></textarea>
        <input type="submit" value="Submit" className='btn btn-success w-100 mt-' />
         </form>
         </div>
         </div>


         <div className="desc pt-5 mt-5"> 
         <h3>Details & Description </h3> 
         <div className="row mt-4">

         <div className="col-lg-5">
         <table class="table  table-striped">
         <tbody>
         <tr>
        <td> <strong> City </strong> </td>
       <td> Khyber </td>
      </tr>
      <tr>
      <td> <strong> Type </strong> </td>
     <td> Khyber </td>
    </tr>
    <tr>
    <td> <strong> Advance </strong> </td>
   <td> Khyber </td>
  </tr>
     </tbody>
     </table>
         </div>
         <div className="col-lg-5">
         <table class="table  table-striped">
         <tbody>
         <tr>
        <td> <strong> Location </strong> </td>
       <td> Sultan Khail </td>
      </tr>
      <tr>
      <td> <strong> Rent </strong> </td>
     <td> PKR 14,000 </td>
    </tr>
    <tr>
    <td> <strong> Agreement </strong> </td>
   <td> 1 year </td>
  </tr>
     </tbody>
     </table>
         </div>





         </div>
         </div>

         <div className="desc mt-5"> 
         <h3> Facilities </h3> 
         <div className="row mt-4">

         <div className="col-lg-5">
         <table class="table  table-striped">
         <tbody>
         <tr>
        <td> <strong> Area  </strong> </td>
       <td> 10 Marlas </td>
      </tr>
      <tr>
      <td> <strong> bed  </strong> </td>
     <td> 3 </td>
    </tr>
    <tr>
    <td> <strong> Electricity  </strong> </td>
   <td> Yes </td>
  </tr>
     </tbody>
     </table>
         </div>
         <div className="col-lg-5">
         <table class="table  table-striped">
         <tbody>
         <tr>
        <td> <strong> Room(feet)  </strong> </td>
       <td> 15*16   </td>
      </tr>
      <tr>
      <td> <strong> Sui Gas  </strong> </td>
     <td>Yes   </td>
    </tr>
    <tr>
    <td> <strong> Water supply  </strong> </td>
   <td> Yes   </td>
  </tr>
     </tbody>
     </table>
         </div>





         </div>
         </div>




         </div>
        </div>

 
         <Footer />
        </>
    )
}

export default Details
