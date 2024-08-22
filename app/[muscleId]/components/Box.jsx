"use client";
import React from "react";
import { useFeature } from "@/utils/stor";
import { useDifficulty } from "@/utils/stor";
import Link from "next/link";
export default function Box({ muscleId, data, difficulty }) {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-extrabold text-white">{muscleId}</h1>
      <div className="grid grid-cols-1 justify-center items-center  md:grid-cols-2 gap-6 mt-11">
        {data?.map((exo, index) => {
          return (
            <div
            key={index}
              className="bg-[#242525] rounded-lg p-3 hover:cursor-pointer
            
            shadow-custom transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-black/70 h-64 "
            >
              <div className=" flex flex-col gap-3  col-span-1">
                <div className="flex gap-2 justify-start items-center ">
                  <p className=" p-3 rounded-3xl bg-secondary text-xl font-bold text-primary">
                    {index+1}
                  </p>
                  <h2 className="text-xl font-bold text-white">
                    {exo.WorkOut}
                  </h2>
                </div>
                <p className=" text-lg font-medium text-accent  break-words overflow-hidden">
                  {exo.Explaination}
                </p>
                {difficulty === "Beginner" ? (
                  <p className="text-primary font-normal text-base">
                   {exo["Beginner Sets"]}
                  </p>
                ) : (
                  <p className="text-accent font-semibold text-base ">
                     {exo["Expert sets"]}
                  </p>
                )}
                <p className="font-light text-base text-secondary">
                  <Link href={exo.Video}>Tutorial of the exrcice </Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
