import Image from "next/image";
import React from "react";
import Computer from "../../public/computerLab.jpg";

const Admission = () => {
  return (
    <>
      <div className="relative w-full h-60 lg:h-[550px] md:h-40 overflow-hidden">
        <Image
          src={Computer}
          alt="girl"
          priority
          fill={true}
          className="object-cover"
        />
        <div className="absolute inset-0">
          <div className="text-center text-4xl font-bold mx-auto mt-14 md:mt-16 lg:mt-60 text-white  bg-white/5 backdrop-blur-sm">
            ADMISSION PROCESS
          </div>
          <p>Testing</p>
        </div>
      </div>
    </>
  );
};

export default Admission;
