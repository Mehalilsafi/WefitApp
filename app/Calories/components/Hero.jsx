"use client";
import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { calculateBMR } from "../actions/getCalorie";
import { calculateDailyCalories } from "../actions/getCalorie";
export default function Hero() {
  const [dailyCalories, setDailyCalories] = useState(null);
  const [formData, setFormData] = useState({
    gender: "",
    weight: "",
    height: "",
    age: "",
    activityLevel: "",
    goal: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  function handleClick() {
    const { gender, weight, height, age, activityLevel, goal } = formData;

    if (!gender || !weight || !height || !age || !activityLevel || !goal) {
      toast.error("Please fill out all fields before calculating.");
      return;
    }
    const BMR = calculateBMR(gender, weight, height, age);
    const dailyCalories = calculateDailyCalories(BMR, activityLevel, goal);

    setDailyCalories(dailyCalories);
    toast.success(
      `Your daily caloric need is ${Math.round(dailyCalories)} calories.`
    );
    console.log("daily calris :", dailyCalories);
  }
  return (
    <div className="flex justify-center items-center w-full flex-col ">
      <form action="">
        <div class="flex flex-col gap-5">
          <label htmlFor="">Gender:</label>
          <select
            className="py-2 px-3 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label htmlFor="">Weight (kg):</label>
          <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="This is placeholder"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
          <label htmlFor="">Height (cm):</label>
          <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="
            This is placeholder"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
          <label htmlFor="">Age:</label>
          <input
            type="text"
            className="py-3 px-4 block w-full rounded-lg border border-gray-200 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="This is placeholder"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <label htmlFor=""> Activity Level:</label>

          <select
            className="py-2 px-3 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleChange}
          >
            <option value="">Select Activity Level</option>
            <option value="sedentary">Sedentary</option>
            <option value="light">Light</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
            <option value="very active">Very Active</option>
          </select>

          <label htmlFor="">Goal:</label>

          <select
            className="py-2 px-3 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
          >
            <option value="">Select Goal</option>
            <option value="lose">Lose Weight</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Gain Weight</option>
          </select>

          <button
            type="button"
            className="flex justify-center  py-3 px-4  items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            onClick={handleClick}
          >
            calculate
          </button>
          {dailyCalories && (
            <div className="mt-4 text-lg ">
              <p> Your daily caloric need is {Math.round(dailyCalories)}</p>
              calories.
            </div>
          )}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
