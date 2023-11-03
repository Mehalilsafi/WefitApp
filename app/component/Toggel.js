"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faPersonDress } from "@fortawesome/free-solid-svg-icons";

export default function Choice({ isMale, isBeginner, handleClikGender,handleClikeDuffeclty  }) {
  const choiceGender = isMale ? "Male" : "Female";
  const choiceDifficulty = isBeginner ? "Beginner" : "Advanced";
  const genderIcon = isMale ? faPerson : faPersonDress;
  return (
    <div className='flex gap-4 m-8 w-2/5'>
      <div className='flex justify-center border-2 border-[#A2FF86] p-2 w-36 gap-4 bg-[#F9F9F9] rounded-xl transition duration-300 ease-in-out hover:bg-[#A2FF86] hover:cursor-pointer' onClick={()=>handleClikGender()}>
        <FontAwesomeIcon icon={genderIcon} />
        <p>{choiceGender}</p>
      </div>
      <div className=' flex justify-center  border-2 border-[#A2FF86] p-2 w-36 gap-4 bg-[#F9F9F9] rounded-xl transition duration-300 ease-in-out hover:bg-[#A2FF86] hover:cursor-pointer' onClick={()=>handleClikeDuffeclty()}>
        <p>{choiceDifficulty}</p>
      </div>
    </div>
  );
}

