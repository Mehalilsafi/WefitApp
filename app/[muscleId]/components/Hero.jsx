"use client"
import React from "react";
import { useFeature } from "@/utils/stor";
import { useDifficulty } from "@/utils/stor";
import Body from "./Body";
export default function Hero({ params }) {
  const { muscleId } = params;
  const feature=useFeature((state)=>state.feature)
  const difficulty=useDifficulty((state)=>state.difficulty)
  console.log(feature)
  console.log(difficulty)

  return (
    <div className="mr-7 ml-7">
      <Body  muscleId={muscleId}/>

    </div>
  );
}
