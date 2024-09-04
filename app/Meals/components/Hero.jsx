"use client";

import React, { useEffect, useState } from "react";
import { meals } from "../actions/getMeals";
import Allergies from "./Allergies";
import Calories from "./Calories";
import Diets from "./Diets";
import Nutrients from "./Nuntrients";
import Search from "./Search";
import { useStore } from "@/utils/stor";
export default function Hero() {
  const [hoveredChoice, setHoveredChoice] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState("");
  const calorie = useStore((state) => state.choice.calories);
  const diet=useStore((state)=> state.choice.diets) 
  console.log("diet afet bind in hero :", diet);
  console.log("calorie afet bind in hero :", calorie);
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
  function handleMouseEnter(index) {
    setHoveredChoice(index);
  }
  return (
    <div className="grid grid-cols-4 h-96 mr-9 ml-9 mt-[150px] mb-[150px] rounded-2xl shadow-custom-light">
      <div className="flex flex-col gap-7 col-span-4 md:col-span-1 p-4">
        <p className="text-accent text-sm ">
          Choose{" "}
          <span className="font-medium text-base text-slate-500">
            one or more{" "}
          </span>
          methods
        </p>
        {choiceList.map((choice, index) => (
          <p
            key={choice.label}
            className={`text-lg font-medium border-b-2 ${
              hoveredChoice === index
                ? "text-secondary border-secondary"
                : "border-transparent"
            } transition-all duration-300 hover:text-secondary hover:border-secondary w-[210px]`}
            onMouseEnter={() => handleMouseEnter(index)}
            onClick={() => handleClick(choice.label)}
          >
            {choice.label}
          </p>
        ))}
      </div>
      <div className="col-span-4 md:col-span-2 border-l border-solid border-accent p-4 ">
        {selectedChoice === "" ? (
          <div>{choiceList[0].component}</div>
        ) : (
          choiceList
            .filter((choice) => choice.label === selectedChoice)
            .map((choice) => <div key={choice.label}>{choice.component}</div>)
        )}
      </div>
      <div className="col-span-4 md:col-span-1 border-l border-solid border-accent p-4 bg-slate-50">
        <button
          type="button"
          className="py-3 px-4 m-auto mt-5 flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg hover:text-gray-500 focus:outline-none focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300 bg-secondary text-white w-[210px]"
        >
          Search
        </button>
      </div>
    </div>
  );
}
