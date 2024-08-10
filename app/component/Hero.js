"use client";

import React, { useState } from "react";
import Link from "next/link";
import Toggel from "./Toggel";
import Featured from "./Featured";
import Body from "./body";
import Box from "./Box";
import TextBox from "./TextBox";
export default function Hero() {
  const [isMale, setGander] = useState(false);
  const [isBeginner, setDuffeclty] = React.useState(false);
  return (
    <div className="ml-4 mr-4">
      <div className="flex w-full gap-4 items-center justify-center">
        <Toggel
          isMale={isMale}
          isBeginner={isBeginner}
          handleClikGender={() => setGander(!isMale)}
          handleClikeDuffeclty={() => setDuffeclty(!isBeginner)}
        />
        <Featured />
      </div>
      <Body />

      <TextBox />
       
        <Box />
      </div>

  );
}
