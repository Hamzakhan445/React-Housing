import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    
    return (
        <>

        <header>
        <nav>
        <div className="logo">
            <h3>Housing.Com</h3>
            </div>
            <div className="nav-links" id="navlinks">
                 <ul className='menubar'>
                 
                    <li><Link className='nav-link' to="/"> Home  </Link>  </li>
                    <li><Link className='nav-link' to="/khyber"> Khyber  </Link>  </li>
                    <li><Link className='nav-link' to="/karachi"> Karachi  </Link>  </li>
                    <li><Link className='nav-link' to="/lahore"> Lahore  </Link>  </li>
                    <li><Link className='nav-link' to="/sialkot"> Sialkot  </Link>  </li>
                    <li><Link className='nav-link' to="/islamabad"> Islamabad  </Link>  </li>
                    <li><Link className='nav-link' to="/peshawar"> Peshawar  </Link>  </li>   

                  <Link to="/signup">
                    <button type="button" className="btn btn-success loginbtn"> Sign up | Log in </button></Link> 
                </ul>

                <i  className='fa fa-bars text-white togglebtn'></i>
 
            </div>
        </nav>

        <div className="slogan">
        
            <h1>Trusted Place To Find a Home</h1>
          
            <div className="searchbar  ">
            <input type="search"  placeholder='Search City ...' className='form-control p-3'   />
            <input type="submit" value="Search" className='btn btn-success btn-lg ' />
            </div>
            
         </div>
  </header>
        </>
    )
}

export default Header
