import React from "react";

export default function HeadlineCard() {
  return (
    <div className="py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative ">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-3xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[200px] md:max-h-[240px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative ">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-3xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[200px] md:max-h-[240px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/6419704/pexels-photo-6419704.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative ">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-3xl px-2 pt-4">
            We Deliver Desserts Too
          </p>
          <p className="px-2">tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[200px] md:max-h-[240px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="/"
        />
      </div>
    </div>
  );
}
