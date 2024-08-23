import React from "react";
import Link from "next/link";
import Hero from "./components/Hero";
import getCalorie from "./actions/getCalorie";
export default function page() {
  return (
    <div>
      <Hero />
    </div>
  );
}
