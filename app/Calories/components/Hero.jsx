"use client";
import React from "react";
import getCalorie from "../actions/getCalorie";
import { useState } from "react";
export default async function Hero() {
  function calculateBMR(gender, weight, height, age) {
    let BMR;

    if (gender === "male") {
      BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (gender === "female") {
      BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    return BMR;
  }
  function calculateDailyCalories(BMR, activityLevel, goal) {
    let multiplier;

    switch (activityLevel) {
      case "sedentary":
        multiplier = 1.2;
        break;
      case "light":
        multiplier = 1.375;
        break;
      case "moderate":
        multiplier = 1.55;
        break;
      case "active":
        multiplier = 1.725;
        break;
      case "very active":
        multiplier = 1.9;
        break;
      default:
        multiplier = 1.2;
    }
    let dailyCalories = BMR * multiplier;
    if (goal === "lose") {
      dailyCalories -= 500;
    } else if (goal === "gain") {
      dailyCalories += 500;
    }
    return dailyCalories;
  }
  const gender = "male"; // or "female"
  const weight = 70; // in kg
  const height = 175; // in cm
  const age = 25; // in years
  const activityLevel = "moderate";
  const al = "lose"
  const BMR = calculateBMR(gender, weight, height, age);
  const dailyCalories = calculateDailyCalories(BMR, activityLevel, goal);

  return (
    <div>
      <form action="">
        <div class="max-w-sm space-y-3">
          <label htmlFor="">gender</label>
          <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="This is placeholder"
          />
            <label htmlFor="">weight</label>
             <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="This is placeholder"
          />
           <label htmlFor="">height</label>
             <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="
            This is placeholder"
          />
          <label htmlFor="">age</label>
             <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="This is placeholder"
          />
          <label htmlFor="">activityLevel</label>
             <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="This is placeholder"
          />
           <label htmlFor="">goal</label>
             <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="This is placeholder"
          />
        </div>
      </form>
    </div>
  );
}
