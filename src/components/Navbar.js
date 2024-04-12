
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { ReactComponent as Logo } from '/Users/suue/Desktop/web-design2/src/images/updated findmyphysio-high-resolution-logo-transparent.svg'; 


function Navbar (){
    
    return (

      <nav className="navbar">
      <ul>
      <Link to="/" className="logo-link">  
            <Logo className="logo" /> 
        </Link>
        <li><Link to ="/about">About</Link> </li>
        <li><Link to ="/signup">Signup</Link> </li>
        <li><Link to ="/login">Log In</Link> </li>
        <li><Link to ="/search"> <FaSearch /></Link> </li>
       
       </ul>
    </nav>
    

    );
}

export default Navbar; 