import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function box({boxTitel,boxText}) {
  return (
   
    <div className='flex flex-col justify-start items-center w-full h-48 md:w-1/5 bg-[#232532]  rounded-lg  p-6  hover:cursor-pointer '>  
      <h3 className='font-semibold text-xl mb-3.5 leading-6'>{boxTitel}</h3>
      <div className='flex gap-1.5'>
      <p className='font-normal text-sm text-[#EFEDE8] leading-6'> {boxText}</p>
      <FontAwesomeIcon icon={faArrowRight} className='text-[white]' />
      </div>
    </div>
   
    
  )
}
