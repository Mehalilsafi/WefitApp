"use client";
import React from "react";
import { useFeature } from "@/utils/stor";
import { useDifficulty } from "@/utils/stor";
export default function Box({muscleId}) {
  const dataObject = [
    {
      id: 1,
      name: "arlondPress",
      description: "dddddddsqgfvqfsrfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsgvsfvq",
    },
    {
      id: 2,
      name: "frontRaise",
      description: "dddddddsqgfvqfsrfsfsfsfsfsfsfsfsfsfsfsfsfsfsfsgvsfvq",
    },
  ];
  return (
    <div className="mt-6">
    <h1 className="text-2xl font-extrabold">{muscleId}</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-11">
      {dataObject.map((exo) => {
        return (
          <div   key={exo.id} className="  bg-slate-200">
            <div className=" flex flex-col gap-3  col-span-1">
              <div className="flex gap-2 justify-start items-center ">
                <p className="rounded-full border-secondary">{exo.id}</p>
                <h2 className="text-xl font-bold">{exo.name}</h2>
              </div>
              <p>{exo.description}</p>
            </div>
          </div>
        );
    })}
    </div>
    </div>
  );
}
