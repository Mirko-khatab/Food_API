import React from 'react'
import Home from './Home'
import Cusinine from './Cusinine'
import Searched from './Searched'
import Reasipe from './Reasipe'
import { Route,Routes } from 'react-router-dom'
const Pages = () => {
  return (
    <Routes>
     <Route path='/' element={<Home/>}/> 
      <Route path='/Cusinine/:type' element={<Cusinine/>}/>
      <Route path='/Searched/:search' element={<Searched/>}/>
      <Route path='/Reasipe/:name' element={<Reasipe/>}/>
    </Routes>
  )
}

export default Pages
