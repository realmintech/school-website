"use client";
import React from "react";
import { FaBaby } from "react-icons/fa";
import { BsFillMortarboardFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";

const ClassCategory = () => {
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
          className="border-gray bg-white text-center  rounded-xl shadow-lg py-4 px-5"
        >
          <p className="text-lemon place-items-center text-4xl">{item.icon}</p>
          <p className="text-lg my-2 font-semibold">{item.title}</p>
          <p className="text-sm">{item.desc}</p>
        </div>
      ))}
    </>
  );
};

export default ClassCategory;
