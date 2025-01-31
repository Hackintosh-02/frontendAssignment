import React from "react";

const Footer = () => {
  return (
    <div className="bg-[rgba(73,208,67,0.1)] w-full mt-8">
      <div className="flex flex-row justify-center items-center py-6 px-4  md:space-y-0 md:space-x-6">
        <img src="/elements/secureSSL.svg" alt="Secure SSL" className="h-8 md:h-10" />
        <img src="/logos/razorpay.svg" alt="Razorpay" className="h-8 md:h-10" />
        <img src="/elements/securePay.svg" alt="Secure Payment" className="h-8 md:h-10" />
      </div>
    </div>
  );
};

export default Footer;
