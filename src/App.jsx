import React from 'react'
import Signup from './compoments/pages/signup'
import Login from './compoments/pages/login'
import { BrowserRouter, NavLink } from 'react-router-dom'
import Routing from './routing/routing'



const App = () => {
  return (

    <BrowserRouter>
  <NavLink to="/Login">go to the login page</NavLink> 
  <NavLink to="/Signup">go to the signup page</NavLink>


  <br/>

  {
    localStorage.getItem("isUserLogedIn")?
    <NavLink to='/profile'>go to profile page</NavLink>
    :""
  }
<Routing/>

  
   {/* <Signup/> */}
   {/* <Login/> */}
  
    </BrowserRouter>
  )
}

export default App