"use client"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Diets() {
  const [selectedItems, setSelectedItems] = useState([]);

  const data = [
    "celery-free",
    "crustacean-free",
    "dairy-free",
    "egg-free",
    "fish-free",
    "fodmap-free",
    "gluten-free",
    "ket-friendly",
    "lupine-free",
    "no-oil-added",
    "peanut-free",
    "red-meat-free",
    "soy-free",
  ];

  function handleIconClick(item) {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((i) => i !== item) 
        : [...prevSelectedItems, item] 
    );
  }

  return (
     <div className="grid grid-cols-3 items-center gap-4  ">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex gap-1 justify-center items-center bg-accent rounded-full p-1 h-9  col-span-1"
          onClick={() => handleIconClick(item)}
        >
          <FontAwesomeIcon
            icon={selectedItems.includes(item) ? faCheck : faPlus}
            className="p-1 bg-four text-primary rounded-full font-medium"
          />
          <p className="text-gray-400 w-full">{item}</p>
        </div>
      ))}
    </div>
  );
}

