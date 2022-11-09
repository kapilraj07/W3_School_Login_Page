import React from 'react'
import "./Loginpage.css"

function Loginpage() {
  return (
    <div className='login'>
        <h3>Login</h3>
  <label className='label'>Name </label> <input type="text"  />
  <label className='label'>Email</label>  <input type="email"  />
  <label className='label'>Password</label> <input type="password"  />
  <span toggle="#password-field" class="field-icon"></span>
  <br></br>
  <button className='button'>Log in</button>
  <a  className='link' href='#' > Forgot password? </a>
  
        </div>
    
  )
}

export default Loginpage