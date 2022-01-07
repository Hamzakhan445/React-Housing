import React  from 'react'
import { Link } from 'react-router-dom'
import MainHeading from './MainHeading'
 
const Cities = () => {
    return (
        <>
        <div className="cities">
        <MainHeading text="houses in popular cities"  />

         <div className="cities_wrapper">
            
            <Link to="/khyber" className="city_box" >
            <div className="box">
            <h3> khyber </h3>
            </div>
            </Link>

            <Link to="/karachi" className="city_box" >
            <div className="box">
            <h3> karachi </h3>
            </div>
            </Link>

            <Link to="/lahore" className="city_box" >
            <div className="box">
            <h3> lahore </h3>
            </div>
            </Link>


            <Link to="/sialkot" className="city_box" >
            <div className="box">
            <h3> sialkot </h3>
            </div>
            </Link>


            <Link to="/islamabad" className="city_box" >
            <div className="box">
            <h3> islamabad </h3>
            </div>
            </Link>


            <Link to="/peshawar" className="city_box" >
            <div className="box">
            <h3> peshawar </h3>
            </div>
            </Link>




            </div>
         </div>
        </>
    )
}

export default Cities
