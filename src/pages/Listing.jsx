import React from 'react'
import Header from '../HomeComp/Header'
import Footer from '../HomeComp/Footer'
import { Link } from 'react-router-dom'
import { FiEdit, FiTrash2 } from "react-icons/fi";
 
const Listing = () => {
 

    return (
        <>
           <div className="listing m-5 ">
            <div className="container-md p-5 shadow">
            
            <table class="table">
  <thead>
    <tr>
      <th scope="col"> City </th>
      <th scope="col">Type</th>
      <th scope="col">Advance</th>
      <th scope="col">Location</th>
      <th scope="col">Rent</th>
      <th scope="col">Agreement</th>
      <th scope="col">Actions</th>
      

      </tr>
  </thead>
  <tbody>
    <tr>
       <td>Mark</td>
       <td>Mark</td>
       <td>Mark</td>
       <td>Mark</td>
       <td>Otto</td>
      <td>@mdo</td>
      <td className='btn-group'> 
        <Link className="nav-link text-dark" to="/addlisting" data-bs-toggle="tooltip" data-bs-placement="top" title="Hooray!"> <FiEdit /> </Link>
        <Link className="nav-link text-dark" to="/">  <FiTrash2 /> </Link>
        </td>
      </tr>

      <tr>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Otto</td>
     <td>@mdo</td>
     <td className='btn-group'> 
       <Link className="nav-link text-dark" to="/addlisting" data-bs-toggle="tooltip" data-bs-placement="top" title="Hooray!"> <FiEdit /> </Link>
       <Link className="nav-link text-dark" to="/">  <FiTrash2 /> </Link>
       </td>
     </tr>



  </tbody>
</table>

            
            </div>
          </div>
         </>
    )
}

export default Listing
