import React from 'react';
import './App.css';
import Helpcenter from './Helpcenter';
import Loginpage from './Loginpage';
import Logo from './Logo';
import Navbar from './Navbar';


function App() {
  return (
    <div className='App'>
<Logo/>
<Loginpage/>
<Navbar/>
<Helpcenter/>

 </div>
  )
}

export default App
