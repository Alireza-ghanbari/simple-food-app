import React, { useState } from "react";
import { data } from "../data/data";

export default function Food() {
  const [foods, setFoods] = useState(data);


  const filterType = (category) => {
    setFoods(
        data.filter((food) => {
            return food.category === category
        })
    )
  }

  const filterPrice = (price) => {
    setFoods(
        data.filter((food) => {
            return food.price === price
        })
    )
  }


  return (
    <div className="py-12 px-4">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Item
      </h1>

      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700 mt-4">Filter Type</p>
          <div className="flex flex-wrap justify-start">
            <button onClick={()=> setFoods(data)} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 m-1">
              All
            </button>
            <button onClick={()=>filterType('burger')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 m-1">
              Burgers
            </button>
            <button onClick={()=>filterType('pizza')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 m-1">
              Pizzas
            </button>
            <button onClick={()=>filterType('salad')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 m-1">
              Salads
            </button>
            <button onClick={()=>filterType('chicken')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 m-1">
              Chickens
            </button>
          </div>
        </div>

        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-start">
            <button onClick={()=>filterPrice('$')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 m-1">
              $
            </button>
            <button onClick={()=>filterPrice('$$')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 m-1">
              $$
            </button>
            <button onClick={()=>filterPrice('$$$')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 m-1">
              $$$
            </button>
            <button onClick={()=>filterPrice('$$$$')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 m-1">
              $$$$
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods?.map((food, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4 flex-wrap">
              <p className="font-bold">{food.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">{food.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
