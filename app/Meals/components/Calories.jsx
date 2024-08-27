"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Calories() {
  const [selected, setSelected] = useState(true);
  function handleClick() {
    setSelected((prev) => !prev);
  }
  return (
    <div className="">
      <p className="mb-4 border-b border-solid border-accent text-accent">
        Input maximum desired calories per serving. For food database results
        default serving is 100g.
      </p>
      <div className="flex justify-start items-center gap-3">
        <input type="text" className="w-32 h-10 rounded" />
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
