"use client";

import React, { useEffect, useState } from "react";
import { meals } from "../actions/getMeals";
export default function Hero() {
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
  return <div>Hero</div>;
}
