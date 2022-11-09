import React from 'react'
import "./Logo.css"
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import IconButton from '@mui/material/IconButton';

function Logo() {
  return (
    <div className='Header' >
        <img className='logo' src='https://imgs.search.brave.com/BMVdj06wGNmHHBv2FiVCF9hq3nz6m3f_fIMn4CBaCAs/rs:fit:192:192:1/g:ce/aHR0cHM6Ly93d3cu/c2Fhc2h1Yi5jb20v/aW1hZ2VzL2FwcC9z/ZXJ2aWNlX2xvZ29z/LzE1LzdjMDUzNmQ2/OTRkZi9sYXJnZS5w/bmc_MTUzNzIwMjQw/NA' alt='logo'></img>
        <IconButton className='header_icon'>  
         <CloseSharpIcon fontSize="large"/> 
        </IconButton>
       
    </div>
    
  )
}

export default Logo