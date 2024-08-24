"use client";

import React, { useEffect, useState } from "react";
import { meals } from "../actions/getMeals";
import Allergies from "./Allergies";
import Calories from "./Calories";
import Diets from "./Diets";
import Nutrients from "./Nutrients";
import Search from "./Search";
export default function Hero() {
  const [selectedChoice, setSelectedChoice] = useState("");

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await meals();
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
    <div>
      <div>
        {choiceList.map((choice) => (
          <p key={choice.label} onClick={() => handleClick(choice.label)}>
            {choice.label}
          </p>
        ))}
      </div>
      <div>
        {choiceList
          .filter((choice) => choice.label === selectedChoice)
          .map((choice) => (
            <div key={choice.label}>{choice.component}</div>
          ))}
      </div>
    </div>
  );
}
