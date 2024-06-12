import React, { useState } from "react";
import { categories } from "../data/data";

export default function Category() {
  return (
    <div className="px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Item
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
        {categories?.map((category, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 justify-between items-center flex ">
            <h2 className="font-bold sm:text-xl ">{category.name}</h2>
            <img src={category.image} alt={category.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
}
