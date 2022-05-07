import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import styled from 'styled-components'
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
const Popular = () => {
  const [popular, setpopular]=useState([])
    useEffect(()=>{
     myfunction()
    },[])
 const myfunction = async()=>{
   const check =localStorage.getItem('popular')
if(check){
  setpopular(JSON.parse(check))
}else{
  const api =await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.React_APP_API_KEY}&number=9`)
  const data =await api.json()
  localStorage.setItem("popular",JSON.stringify(data.recipes))
  setpopular(data.recipes)
}

 
 }
  return (
<div>
<Wrapper>
     <h3>Popular</h3>
     <Splide options={{
       perPage:4,
       arrows:false,
       pagination:false,
       drag:'free'
       ,gap:'5rem'
     }}>
{popular.map((e)=>{
 return (
<SplideSlide key={e.id}>
<Link to={"/Reasipe/" +e.id}>
    <Card >
    <p>{e.title}</p>
    <img src={e.image} alt="rasmakan"/>
    <Gradient/>
  </Card>
  </Link>
  </SplideSlide>

  )
})}
</Splide>
</Wrapper>
</div>
  )
}
const Wrapper=styled.div`
  margin: 4rem 0rem`;

  const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p{
  position: absolute;
z-index: 10;
left: 50%;
bottom: 0%;
transform: translate(-50%, 0%);
color: white;
width: 100%;
text-align: center;
font-weight: 600;
font-size: 1rem;
height: 40%;
display: flex;
justify-content: center;
align-items: center;
  }`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0,0, 0), rgba(0, 0, 0, 0.5))`;
export default Popular
