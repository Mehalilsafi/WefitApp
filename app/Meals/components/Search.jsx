import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function Search() {
  return (
    <div>
      <p className="text-base text-four ">
        Enter a what you have eaten, like "coffee and croissant" or "chicken
        enchilada" to see how it works. We have accurate data tens of thousands
        of foods, including international dishe
      </p>
      <div className=" flex flex-col gap-5 mt-6">
        <p className="text-lg font-medium text-accent">Keywords</p>
        <div className="flex items-center justify-center">
          <input
            type="text"
            class="py-3 px-4 block w-full border-gray-200 rounded-l-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="type one or more keywords  "
          />

          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className=" p-4 bg-secondary text-white rounded-r-lg font-medium "
          />
        </div>
      </div>
    </div>
  );
}
