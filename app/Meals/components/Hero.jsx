"use client";

import React, { useEffect, useState } from "react";
import { meals } from "../actions/getMeals";
import Allergies from "./Allergies";
import Calories from "./Calories";
import Diets from "./Diets";
import Nutrients from "./Nuntrients";
import Search from "./Search";
export default function Hero() {
  const [selectedChoice, setSelectedChoice] = useState("");

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        //const response = await meals();
        setData(response);
      } catch (err) {
        throw new err("error in Hero page ");
      }
    };

    fetchMeals();
  }, []);
  console.log("data in Hero client: ", data);

  const choiceList = [
    { label: "search by key Words", component: <Search /> },
    { label: "Allergies", component: <Allergies /> },
    { label: "Diets", component: <Diets /> },
    { label: "Calories", component: <Calories /> },
    { label: "Nutrients", component: <Nutrients /> },
  ];

  function handleClick(choice) {
    setSelectedChoice(choice);
  }
  return (
    <div className="grid grid-cols-4 bg-slate-300 m-7">
      <div className="flex flex-col gap-3 col-span-4 md:col-span-1  bg-slate-400 p-4">
        <p>Choose one or more methods</p>
        {choiceList.map((choice) => (
          <p key={choice.label} onClick={() => handleClick(choice.label)}>
            {choice.label}
          </p>
        ))}
      </div>
      <div className="col-span-4 md:col-span-2 bg-slate-200 p-4">
        {choiceList
          .filter((choice) => choice.label === selectedChoice)
          .map((choice) => (
            <div key={choice.label}>{choice.component}</div>
          ))}
      </div>
      <div className="col-span-4 md:col-span-1  bg-slate-600 p-4">
        <button
          type="button"
          className="py-3 px-4 m-auto mt-5 flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 focus:outline-none focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300  "
        >
          Search
        </button>
      </div>
    </div>
  );
}
