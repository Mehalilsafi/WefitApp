"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import logo from "@/public/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex flex-col md:flex-row md:items-center h-auto md:h-32 w-full bg-[#181818] text-[#DDD] '>
      <div className='flex justify-between items-center p-4 md:p-0 w-full md:w-1/12'>
        <Image src={logo} alt='logo image' width={180} />
        <div className='md:hidden'>
          <FontAwesomeIcon icon={faBars} className='w-7' onClick={toggleMenu} />
        </div>
      </div>
      <div className="w-full md:w-4/5 md:mx-3.5">
        {(isMenuOpen || window.innerWidth > 768) && (
          <ul className='flex flex-col md:flex-row justify-center items-center gap-10 font-inter text-32 font-normal'>
            <li className='p-3 hover:bg-[#A2FF86] hover:text-black hover:border-transparent border-2 border-transparent rounded-full hover:cursor-pointer'>
              <Link href="/">Workout</Link>
            </li>
            <Link href="/Calories">
            <li className='p-3 hover:bg-[#A2FF86] hover:text-black hover:border-transparent border-2 border-transparent rounded-full hover:cursor-pointer'>
              Calories calculator
            </li>
            </Link> 
            <Link href="/Macro">
            <li className='p-3 hover:bg-[#A2FF86] hover:text-black hover:border-transparent border-2 border-transparent rounded-full hover:cursor-pointer'>
              Macro calculation
            </li>
            </Link>
            <Link href="/Meals">
            <li className='p-3 hover:bg-[#A2FF86] hover:text-black hover-border-transparent border-2 border-transparent rounded-full hover:cursor-pointer'>
              Meals
            </li>
            </Link>
            <Link href="/Contact">
            <li className='p-3 hover:bg-[#A2FF86] hover:text-black hover:border-transparent border-2 border-transparent rounded-full hover:cursor-pointer'>
              Contact us
            </li>
            </Link>
          </ul>
        )}
      </div>
      <div className='hidden md:block'>
        <FontAwesomeIcon icon={faUser} className='w-9' />
      </div>
    </nav>
  );
}





