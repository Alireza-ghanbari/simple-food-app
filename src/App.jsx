import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCard from "./components/HeadlineCard";
import Food from "./components/Food";
import Category from "./components/Category";

export default function app() {
  return (
    <div className="">
        <Navbar />
      <div className="max-w-[1640px] mx-auto p-4">
        <Hero />
        <HeadlineCard />
        <Food />
        <Category />
      </div>
    </div>
  );
}
