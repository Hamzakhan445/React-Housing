import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='footer bg-dark p-5'>
            <div className="container-md">   
            <div className="row align-items-start justify-content-between ">
            
            <div className="col-lg-3 col-6 col-sm-6 col-md-4  mt-4 footerbox">
            <h3  className='text-center'> Company </h3>
            <ul className='footermenu'>
            <Link className='nav-link' to="/about"> <li> About Us  </li>  </Link>
            <Link className='nav-link' to="/contact"> <li> Contact Us  </li>  </Link>
            </ul>
            </div>

            <div className="col-lg-2 col-6 col-sm-6 col-md-4 mt-4 footerbox">
            <h3  className='text-center'> Links </h3>
            <ul className='footermenu'>
            <Link className='nav-link' to="/"> <li> Home  </li>  </Link>
            <Link className='nav-link' to="/khyber"> <li> Khyber  </li>  </Link>
            <Link className='nav-link' to="/karachi"> <li>  Karachi </li>  </Link>
            <Link className='nav-link' to="/lahore"> <li>  Lahore </li>  </Link>
            <Link className='nav-link' to="/sialkot"> <li> Sialkot  </li>  </Link>
            <Link className='nav-link' to="/islamabad"> <li> Islamabad  </li>  </Link>
            <Link className='nav-link' to="/peshawar"> <li> Peshawar  </li>  </Link>
            </ul>
            </div>

            <div className="col-lg-3 col-12 col-sm-5 col-md-4 mt-4 footerbox">
            <h3> Head Office </h3>
             <p> <i className='fa fa-map'></i>  Peshawar Pakistan </p>
             <p> <i className='fa fa-phone'></i>  0306 9129158</p>
             <p> <i className='fa fa-envelope'></i>  housing.com@gmail.com   </p>
            </div>

            <div className="col-lg-3 col-12 col-sm-7 col-md-10 mx-auto mt-4 footerbox">
            <h3> Get Connected </h3>
            <div className="btm-group">
            <button type='button' className='socialbtn' style={{background:"#3B5B9B"}} > <i className='fa fa-facebook text-large btn-lg '> </i>   </button>
            <button type='button' className='socialbtn' style={{background: "linear-gradient(45deg,#405DE6, #5851DE, #833AB4, #C13584, #E1306C, #FD1D1D)" }} >
             <i className='fa fa-instagram text-large btn-lg '> </i>   </button>
            <button type='button' className='socialbtn' style={{background:"#00aced"}}> <i className='fa fa-twitter text-large btn-lg '> </i>   </button>
            </div>
            </div>

            </div>
            </div>
            </footer>
        </>
    )
}

export default Footer
