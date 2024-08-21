"use client";
import React from "react";
import { useFeature } from "@/utils/stor";   
import { useDifficulty } from "@/utils/stor";
export default function Box({ muscleId,data }) {



  const dataObject = [
    {
      id: 1,
      name: "Arnold Press",
      description: "A shoulder exercise that targets the deltoids, enhancing muscle size and strength.",
    },
    {
      id: 2,
      name: "Front Raise",
      description: "An exercise focusing on the front deltoids, helping to build shoulder strength and definition.",
    },
  ];
  
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-extrabold text-white">{muscleId}</h1>
      <div className="grid grid-cols-1 justify-center items-center  md:grid-cols-2 gap-6 mt-11">
        {dataObject.map((exo) => {
          return (
            <div key={exo.id} className="">
              <div className=" flex flex-col gap-3  col-span-1">
                <div className="flex gap-2 justify-start items-center ">
                  <p className=" p-3 rounded-3xl bg-secondary text-xl font-bold text-primary">
                    {exo.id}
                  </p>
                  <h2 className="text-xl font-bold text-white">{exo.name}</h2>
                </div>
                <p className=" text-lg font-semibold text-white  break-words overflow-hidden">
                  {exo.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
