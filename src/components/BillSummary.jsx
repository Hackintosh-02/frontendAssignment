import React from "react";
import { useState } from "react";

const BillSummary = () => {
    const billDetails = [
        {
            description: "12 Month Subscription",
            price: "₹5,999",
            details: "₹599 x 12 Months",
        }
    ];
    return (
        <div className="bg-[#121312] text-white p-5 rounded-2xl shadow-lg">
            <h3 className="text-lg font-bold mb-6">BILL SUMMARY</h3>
            {billDetails.map((item,index)=>(
                <div key={index} className="mb-3">
                    <p className="text-gray-300 text-xl">
                        <span className=""> {item.description}</span>
                        <span className="float-right">{item.price}</span>
                    </p>
                    {item.details && (
                        <p className="text-gray-400 text-sm mt-1">{item.details}</p>
                    )}
                </div>
            ))}
            <p className="text-green-400 text-xl">Coupon Applied <span className="float-right">-₹5000</span></p>
            <hr className="border-gray-700 text-xl my-3" />
            <h2 className="text-2xl font-bold">To Pay <span className="float-right">₹999</span></h2>
        </div>
    );
};

export default BillSummary;
