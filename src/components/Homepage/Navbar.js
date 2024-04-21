
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg'
import '../Homepage/homepage.css'
import { CgProfile } from "react-icons/cg";

function Navbar (){
    
    return (

      <nav className="navbar">
          <Link to="/" className="logo-link">  
            <Logo className="logo" /> 
        </Link>

      <ul className='menu'>
        <li><Link to ="/">Home </Link> </li>
        <li><Link to ="/about">About</Link> </li>
        <li><Link to ="/signup">< CgProfile className='profile-logo' /></Link> </li>
        <li><Link to ="/contact"> Contact Us</Link> </li>
       
       </ul>
    </nav>
    

    );
}

export default Navbar; 