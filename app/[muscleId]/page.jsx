import React from 'react'
import Hero from './components/Hero'
export default function page({params}) {
  return (
    <div className=''>
        <Hero params={params}/>
    </div>
  )
}
