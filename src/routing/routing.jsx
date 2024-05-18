import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../compoments/pages/login'
import Signup from '../compoments/pages/signup'
import Protectedroute from './protectedroute'
import Profilepage from '../compoments/pages/profilepage'

const Routing = () => {
  return (
  <Routes>


    <Route path='Login' element={<Login/>}></Route>
    <Route path='Signup' element={<Signup/>}></Route>
    <Route path='/profilepage' element={<Protectedroute Component={<Profilepage/>}/>}/>
  
  </Routes>
  )
}

export default Routing
