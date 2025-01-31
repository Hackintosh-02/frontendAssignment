import React from "react";

const Pricing = () => {
  return (
    <div className="bg-[#121312] text-white p-5 rounded-2xl shadow-lg">
        <div className="flex justify-between pb-3">
            <h2 className="text-xl font-bold">12 Month Plan</h2>
            <h2 className="text-xl font-bold">₹999</h2>
        </div>
        <div className="flex justify-between">   
            <p className="text-[#74C928]">Offer Ending Soon</p>
            <span className="opacity-50 line-through">₹5999/yearly</span>
        </div>
    </div>
  );
};

export default Pricing;
