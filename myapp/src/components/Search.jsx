import React from 'react'
import Styled from "styled-components";
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
const Search = () => {
    const navigate =useNavigate();
    const [input ,setinput]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault();
        navigate("/searched/" +input)

    }
  return (
    <Formstyle onSubmit={submitHandler}>
  
        <div>
            <FaSearch></FaSearch>
      <input type="text" onChange={(e)=>{
    setinput(e.currentTarget.value)
      }}
      value={input} />
      </div>
    
    </Formstyle>
  )
}
const Formstyle=Styled.form`
margin:0rem 20rem;
div{
    width:100%;
    position:relative;
}
input {
    border:none;
    background: linear-gradient(35deg , #494949 ,#313131);
    font-size:1.5rem;
    color:white;
    padding:1rem 3rem;
    border:none;
    border-radius:1rem;
    outline:none;
    width:100%
}
svg{
    position:absoulute;
    top:50%;
    left:0%;
    transform:translate(100% ,-50%);
    color:white;
}`
;
export default Search
