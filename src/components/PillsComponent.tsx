"use client";
import Image from "next/image";
import { useState } from "react";
import Classroom from "../../public/classroom2.jpg";
import Dinning from "../../public/dinning.jpg";
import School from "../../public/schoolCorridor.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PillsComponent = () => {
  const [activeTab, setActiveTab] = useState("vision");
 useEffect(() => {
   AOS.init({
     duration: 600,
     once: false,
     offset: 200,
     easing: "ease-in-sine",
   });
 }, []);
  const getImageForTab = (tab) => {
    switch (tab) {
      case "vision":
        return Classroom;
      case "mission":
        return School;
      case "value":
        return Dinning;
      default:
        return Classroom;
    }
  };

  return (
    <div
      className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8"
      data-aos="flip-right"
    >
      <div className="flex">
        <Image
          src={getImageForTab(activeTab)}
          alt={`${activeTab} image`}
          width={450}
          height={450}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col w-full md:w-1/2 space-y-4">
        <ul className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4">
          {["vision", "mission", "value"].map((tab) => (
            <li key={tab} className="w-full sm:w-auto">
              <button
                onClick={() => setActiveTab(tab)}
                className={`w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-4 font-semibold cursor-pointer text-center ${
                  activeTab === tab
                    ? "bg-lemon text-white"
                    : "bg-white text-lemon"
                }`}
                aria-controls={tab}
                aria-selected={activeTab === tab}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div
          id={activeTab}
          role="tabpanel"
          aria-labelledby={`${activeTab}-tab`}
          className="p-6 bg-gray-100 rounded-lg"
        >
          {activeTab === "vision" && (
            <p className="text-sm leading-relaxed tracking-wide">
              To breed future leaders who lead in a way that is just and pleases Allah
            </p>
          )}
          {activeTab === "mission" && (
            <p className="text-sm leading-relaxed tracking-wide">
             
              The mission of the school is to have a montessori where academics is lightened up with islamic knowledge
            </p>
          )}
          {activeTab === "value" && (
            <p className="text-sm leading-relaxed tracking-wide">
             Impacting immeasurable value to kids who rule the society.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PillsComponent;
