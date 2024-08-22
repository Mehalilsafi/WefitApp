"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useFeature } from "@/utils/stor";
import { useDifficulty } from "@/utils/stor";
import Body from "./Body";
import Box from "./Box";
import getExercice from "../actions/getExercice";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function Hero({ params }) {
  const { muscleId } = params;
  console.log('muscle in hero :',muscleId)
  const feature = useFeature((state) => state.feature);
  const difficulty = useDifficulty((state) => state.difficulty);
  console.log(feature);
  console.log(difficulty);

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await getExercice( muscleId, feature, difficulty );
      console.log("hero data log", fetchedData);
     setData(fetchedData); 
    }

    fetchData();
  }, []);
  return (
    <div className="bg-primary">
      <div className="mr-7 ml-7 ">
        <Body className='hidden md:flex' muscleId={muscleId} />
        {data ? (
          <Box muscleId={muscleId} data={data} difficulty={difficulty} />
        ) : (
          <Skeleton count={5} height={200} />
        )}
      </div>
    </div>
  );
}
