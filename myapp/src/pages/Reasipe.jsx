import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link,useParams } from 'react-router-dom';
import Styled from 'styled-components'


const Reasipe = () => {

let prams = useParams();
const [reasipe,setreasipe] =useState([]);
const [activetag,setactivetag]=useState('Instructions')
const getReasipe = async ()=>{
  const data =await fetch(`https://api.spoonacular.com/recipes/${prams.name}/information?apiKey=${process.env.React_APP_API_KEY}`)
const recipes = await data.json();
setreasipe(recipes)  
}
useEffect(()=>{
  console.log(reasipe)
  getReasipe(prams.name)


    },[prams.name])

  return (
    <Dwrapper>
      <div>
      <h2>{reasipe.title}</h2>
      <img src={reasipe.image} alt="thi is image" />
      </div>
      <Info>
        <Button onClick={()=>{setactivetag('Instructions')}} className={activetag ==='Instructions'?'active':''}>Instructions</Button>
        <Button onClick={()=>{setactivetag('Ingredients')}}  className={activetag==='Ingredients'?'active':''}>Ingredients</Button>
       {activetag ==='Instructions' &&(
            <div>
            <h3 dangerouslySetInnerHTML={{__html:reasipe.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html:reasipe.instructions}}></h3>
         </div>      
       )}
     {
       activetag ==='Ingredients' && (
        <ul>
        {reasipe.extendedIngredients.map((e)=>(
          <li key={e.id}>{e.original}</li>
        ))}
      </ul>
       )
     }
      
      </Info>
    </Dwrapper>
  )
}
const Dwrapper =Styled.div`
margin-top:10rem;
margin-bottom:5rem; 
display:flex;
.active{
  background: linear-gradient(35deg , #494949 ,#313131);
  color:white
}
h2{
  margin-bottom:2rem;
}
li{
  font-size:1.2rem;
  line-height:2.5rem;
}
ul{
  margin-top:2rem;
}
`
const Button =Styled.button`
padding:1rem 2rem;
color:#313131;
background: white;
border:2px solid black;
margin-right:2rem;
font-weight:600;


`
const Info =Styled.div`
margin-left:10rem;
`
export default Reasipe
