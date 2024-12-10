"use client";
import React from "react";
import { FaBaby } from "react-icons/fa";
import { BsFillMortarboardFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ClassCategory = () => {
   useEffect(() => {
     AOS.init({
       duration: 600,
       once: false,
       offset: 200,
       easing: "ease-in-sine",
     });
   }, []);
  const data = [
    {
      title: "Creche",
      icon: <FaBaby />,
      desc: "Kids class from 1 year to 2 years old.",
    },
    {
      title: "Kindergarten",
      icon: <BsFillMortarboardFill />,
      desc: "Kids class from 1 year to 2 years old.",
    },
    {
      title: "Nursery",
      icon: <GiSchoolBag />,
      desc: "Kids class from 1 year to 2 years old.",
    },
    {
      title: "Primary",
      icon: <FaUserGraduate />,
      desc: "Kids class from 1 year to 2 years old.",
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          data-aos="fade-down"
          data-aos-easing="linear"
          className="border-gray bg-white text-center  rounded-xl shadow-lg py-4 px-5"
        >
          <p className=" flex justify-center items-center text-lemon place-items-center text-4xl">{item.icon}</p>
          <p className="text-lg my-2 font-semibold">{item.title}</p>
          <p className="text-sm">{item.desc}</p>
        </div>
      ))}
    </>
  );
};

export default ClassCategory;
