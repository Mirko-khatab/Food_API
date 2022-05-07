import React from 'react'
import Category from './components/Category'
import Pages from './pages/Pages'
import {BrowserRouter} from 'react-router-dom'
import Search from './components/Search'
import Styled from 'styled-components'
import {GiKnifeFork} from "react-icons/gi"
import { Link } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
    <Nav >
      <GiKnifeFork/>
      <Logo to={"/"}>delesions</Logo>
      </Nav>
    <Search/>
      <Category/>
    <Pages/>
    
    </BrowserRouter>
  )
}
const Logo =Styled(Link)`
text-decoration:none;
font-size:1.5rem;
font-weight:400;
font-family: 'Lobster', cursive;`
const Nav=Styled.div`
padding:4rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;
svg{
  font-size:2rem;
}`

export default App
