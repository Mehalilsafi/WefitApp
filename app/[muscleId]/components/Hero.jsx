"use client"
import React from "react";
import { useFeature } from "@/utils/stor";
export default function Hero({ params }) {
  const { muscleId } = params;
  const feature=useFeature((state)=>state.feature)
  console.log(feature)
  const exoTypeData = ["bar", "faDumbbell", "Cable"];
  return (
    <div className="mr-7 ml-7">
      <div className="flex gap-3 justify-start">
        {exoTypeData.map((ele, index) => {
          return (
            <p
              key={index}
              className="flex justify-center items-center rounded-lg border-emerald-50 border-solid "
            >
              {ele}
            </p>
          );
        })}

      </div>

    </div>
  );
}
