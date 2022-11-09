import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <ul >
            <li>&copy;1999-2022 </li>
            <li> 
                <a href='https://www.w3schools.com/'>W3schools</a>
            </li>
            <li>
                All rights reserved
            </li>
            <li>
                <a href='#'>Cookie Policy,Privacy</a>
            </li>
           
            <li><a href='#'> andTerms</a></li>
           
          
        </ul>

    </div>
  )
}

export default Navbar