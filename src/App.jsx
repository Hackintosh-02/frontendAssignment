import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import BillSummary from "./components/BillSummary";
import Footer from "./components/Footer";
import Discount from "./components/Discount";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#090C09] text-white flex flex-col justify-between items-center">
      <Header />
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6 md:mt-6">
        <div className="space-y-6">
          <Features />
          <Pricing />
        </div>
        
        <div className="space-y-6">
          <Discount />
          <BillSummary />
          <button className="w-full bg-[#EBCE31] text-black text-xl font-bold py-6 rounded-lg shadow-lg hover:bg-yellow-500">
            Proceed to Pay <span className="font-normal">|</span> ₹ 699/<span className="font-normal">month</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
