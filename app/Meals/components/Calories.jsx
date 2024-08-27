"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Calories() {
  return (
    <div className="">
      <p className="mb-4 border-b border-solid border-accent text-accent">
        Input maximum desired calories per serving. For food database results
        default serving is 100g.
      </p>
      <div className="flex justify-start items-center gap-3">
        <input type="text"  className="w-32 h-10 rounded"/>
        <p className="font-medium text-lg">kcal</p>
        <FontAwesomeIcon
          icon={faPlus}
          className="p-1 bg-four text-primary rounded-full font-medium"
        />
      </div>
    </div>
  );
}
