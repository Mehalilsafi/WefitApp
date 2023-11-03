"use client"


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

export default function Featured() {
  const [isFeaturdOpen, setFeatured] = React.useState(false);

  let FeaturedArr = ["STRETCHES", "BODYWEIGHT", "BARBEL", "CABLES", "FEATURED"];
  let Featured = FeaturedArr.map((featur,index) => {
    return (
      <li
        className='flex justify-center items-center rounded w-full bg-[#D9D9D9] md:w-2/5 transition duration-300 ease-in-out hover:bg-[#A2FF86]  p-5'
        key={index}
      >
        {featur}
      </li>
    );
  });

  function toggleFeatured() {
    setFeatured((prev) => {
      return !prev;
    });
  }

  const ulClasses = `flex flex-col gap-2 ${window.innerWidth > 768 ? 'h-16' : 'h-auto'} rounded p-5 mt-6 md:flex-row`;

  return (
    <div>
      <div className='flex justify-center border-2 border-[#A2FF86] p-2 w-36 bg-[#F9F9F9] rounded-xl ml-2.5 md:hidden' onClick={toggleFeatured}>
        <FontAwesomeIcon icon={faDumbbell} />
      </div>
      {(isFeaturdOpen || window.innerWidth > 768) && (
        <ul className={ulClasses}>
          {Featured}
        </ul>
      )}
    </div>
  );
}


