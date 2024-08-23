"use client"
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function loading() {
  return (
    <div>
      <Skeleton count={5} height={200} />
    </div>
  )
}
