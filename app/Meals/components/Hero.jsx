import React from 'react'
import { meals } from '../actions/getMeals'
export default async function Hero() {
    const response=await meals()
    console.log("response in hero **** :",response)
  return (
    <div>Hero</div>
  )
}
