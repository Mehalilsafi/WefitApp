
"use client"

import React,{useState} from 'react'
import Link from 'next/link';
import Toggel from "./Toggel"
import Featured from './Featured';
import Body from './body';
import Box from './Box';
import TextBox from './TextBox';
export default function Hero() {
    const [isMale,setGander] = useState(false);
    const [isBeginner,setDuffeclty]=React.useState(false);
return (
    <div>
    <div className='flex w-full gap-4 items-center justify-center'>
    <Toggel
    isMale={isMale}
    isBeginner={isBeginner}
    handleClikGender={()=>setGander(!isMale)}
    handleClikeDuffeclty={()=>setDuffeclty(!isBeginner)}
    />
    <Featured/>
    </div> 
    <Body/>

    <TextBox/>
    <div className='flex flex-col gap-3.5 justify-center w-full items-center  md:flex-row '>
    <Box
    boxTitel="Workout Videos"
    boxText="Access to hundreds of free, full-length workout videos."
    />
    <Box
    boxTitel="Workout Programs"
    boxText="Affordable and effective workout programs."
    />
    <Box
    boxTitel="Meals plans"
    boxText="Plans built with registered dietitians and nutritionists."
    />
   
    <Box
    boxTitel="Calories calculatore"
    boxText="Add powerful features to your membership."
    />
   
    </div>

    

    </div>
  )
}
