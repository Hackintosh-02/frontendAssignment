import React from "react";

const Header = () => {
    return (
      <header className="flex md:justify-center justify items-center bg-[#151515] text-white w-full py-6 border-b-1 border-[rgb(180, 180, 180)]">
        <div className="text-2xl font-bold flex items-center pl-8">
          <img src="/public/logos/mainLogo.svg" alt="UpskillMafia" className="h-12 mr-4" />
        </div>
        <img src="/public/elements/seperator.svg" className="p-6" ></img>
        <h2 className="text-2xl font-normal opacity-60">Order Summary</h2>
      </header>
    );
  };

export default Header;
