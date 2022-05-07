import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link,useParams } from 'react-router-dom';
import Styled from 'styled-components'



const Cusinine = () => {

let prams = useParams();
const [cusinine,setcusinine] =useState([]);

const getcusinine = async (name)=>{
  const data =await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.React_APP_API_KEY}&cuisine=${name}`)
const recipes = await data.json();
setcusinine(recipes.results)  
}
useEffect(()=>{
  
  getcusinine(prams.type)


    },[prams.type])

  return (
<Grid>
  {cusinine.map((e)=>{
  return(
    <Link to={"/Reasipe/" +e.id}>
    <Card key={e.id}>
    <img src={e.image} alt="{e.title}" />
    <h4>{e.title}</h4>
  </Card>
  </Link>
  )
  })}
</Grid>
  )
}
const Grid =Styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
grid-gap:3rem;`;
const Card =Styled.div`
img{
  width:100%;
  border-radius:2rem;
  a{
    text-decoration:none;

  } h4{
    text-align:center;
    padding:1rem;
  }
}`;


export default Cusinine
