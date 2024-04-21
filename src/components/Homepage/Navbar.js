
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '/Users/suue/Desktop/web-design2/src/logo.svg'; 
import '/Users/suue/Desktop/web-design2/src/components/Homepage/homepage.css'
import { CgProfile } from "react-icons/cg";

function Navbar (){
    
    return (

      <nav className="navbar">
      <ul>
      <Link to="/" className="logo-link">  
            <Logo className="logo" /> 
        </Link>
        <li><Link to ="/">Home </Link> </li>
        <li><Link to ="/about">About</Link> </li>
        <li><Link to ="/signup">< CgProfile className='profile-logo' /></Link> </li>
        <li><Link to ="/contact"> Contact Us</Link> </li>
       
       </ul>
    </nav>
    

    );
}

export default Navbar; 