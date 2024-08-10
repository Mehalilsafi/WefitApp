import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function box() {
  const boxData = [
    {
      boxTitle: "Workout Videos",
      boxText: "Access to hundreds of free, full-length workout videos.",
    },
    {
      boxTitle: "Workout Programs",
      boxText: "Affordable and effective workout programs.",
    },
    {
      boxTitle: "Meals Plans",
      boxText: "Plans built with registered dietitians and nutritionists.",
    },
    {
      boxTitle: "Calories Calculator",
      boxText: "Add powerful features to your membership.",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {boxData.map((box, index) => (
        <div
          key={index}
          className="flex flex-col justify-start items-center w-full h-48 bg-[#232532] rounded-lg p-6 hover:cursor-pointer"
        >
          <h3 className="font-semibold text-xl mb-3.5 leading-6 text-white">
            {box.boxTitle}
          </h3>
          <div className="flex gap-1.5">
            <p className="font-normal text-sm text-[#EFEDE8] leading-6">
              {box.boxText}
            </p>
            <FontAwesomeIcon icon={faArrowRight} className="text-[white]" />
          </div>
        </div>
      ))}
    </div>
  );
}
