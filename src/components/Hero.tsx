import Image from "next/image";
import React from "react";
import Girl from "../../public/assests/sch2.jpg";


const Hero = () => {
  return (
    <>
      <div className="w-full h-40 lg:h-96 md:h-40 overflow-hidden">
        <Image
          src={Girl}
          alt="girl"
          priority
          fill={true}
          className="object-cover h-60 lg:h-48"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/60"></div>
      <div className="relative px-2 md:px-14 lg:px-20 text-center md:text-left text-white bottom-16 lg:bottom-40 mx-auto">
        <p className="text-xl font-medium">Welcome to</p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          Al-hikmoh Montessori Academy
        </h1>
        <p className="font-light italic text-sm">Where academic excellence is lightened up with Islamic knowledge....</p>
      </div>
    </>
  );
};

export default Hero;
