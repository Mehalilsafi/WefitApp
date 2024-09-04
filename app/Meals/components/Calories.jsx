"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "@/utils/stor";
export default function Calories() {
  const [selected, setSelected] = useState(true);
  const [calorie, setCalorie] = useState("");
  const addCalories = useStore((state) => state.addCalories);
  function handleClick() {
    setSelected((prev) => {
      const newSelected = !prev;

      if (!newSelected) {
        addCalories(calorie); 
        console.log("Calorie after select:", calorie);
      } else {
        console.log("Selection was deselected");
      }

      console.log("New selected state:", newSelected); 

      return newSelected;
    });
  }
  console.log("calrie after select :",calorie)
  function handleChange(event) {
    setCalorie(event.target.value);
    console.log(calorie);
  }
  return (
    <div className="">
      <p className="mb-10 border-b border-solid border-accent text-accent">
        Input maximum desired calories per serving. For food database results
        default serving is 100g.
      </p>
      <div className="flex justify-start items-center gap-3">
        <input
          type="text"
          className="w-32 h-10 rounded border border-solid border-gray-300 "
          value={calorie}
          onChange={handleChange}
        />
        <p className="font-medium text-lg">kcal</p>
        <FontAwesomeIcon
          icon={selected ? faPlus : faCheck}
          className={
            selected
              ? "p-1 bg-four text-primary rounded-full font-medium"
              : "p-1 bg-four text-secondary rounded-full font-medium"
          }
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
