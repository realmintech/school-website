import Image from "next/image";
import React from "react";
import Girl from "../../public/assests/sch6.jpg";

const Hero = () => {
  return (
    <>
      <div className="w-full h-40 lg:h-96 md:h-48 overflow-hidden">
        <Image
          src={Girl}
          alt="girl"
          priority
          fill={true}
          className="object-cover h-60 lg:h-48"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/60"></div>
      <div className="relative px-2 md:px-14 lg:px-20 text-white bottom-16 lg:bottom-40 mx-auto bg-white/5 backdrop-blur-sm">
        <p className="text-4xl">Welcome to</p>
        <h1 className="text-4xl font-bold">Al-hikmoh Montessori Academy</h1>
        <i>
          Where academic excellence is lightened up with Islamic knowledge....
        </i>
      </div>
    </>
  );
};

export default Hero;
