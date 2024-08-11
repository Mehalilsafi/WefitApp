import React from 'react'

export default function Hero({params}) {
  const {muscleId}=params;
    const exoTypeData=["bar","faDumbbell","Cable"];
  return (
    <div className='mr-7 ml-7'>
        <div className='flex gap-3 justify-start'>
            {exoTypeData.map((ele,index)=>{
                 return <p key={index} className='flex justify-center items-center rounded-lg border-emerald-50 border-solid '>{ele}</p>;

            })}
        </div>

    </div>
  )
}
