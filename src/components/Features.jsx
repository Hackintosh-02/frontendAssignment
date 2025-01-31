import React from "react";

const features = [
  "Access To 25+ Professional Courses",
  "Hackathons & Competitions",
  "Practise Mock Interviews",
  "Guaranteed Jobs And Internships",
  "Clubs & Certifications",
  "Personalized Mentorship",
];

const Features = () => {
    return (
      <div className="bg-[rgba(73,208,67,0.1)] text-white p-8 md:rounded-3xl shadow-lg ">
        <h3 className="bg-gradient-to-r from-[#74C928] to-[#FFB912] bg-clip-text text-transparent text-2xl font-semibold mb-6">
          Learn, Build, Network & Earn
        </h3>   
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex space-x-2">
              <img src="/public/icons/check.svg" alt="Tick Icon" className="w-5 h-5" />
              <span className="text-white">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Features;
