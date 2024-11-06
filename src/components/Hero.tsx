import Image from "next/image";
import React from "react";
import Girl from "../../public/girl.jpg";


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
      <div className="relative px-2 md:px-14 lg:px-20 text-lemon bottom-16 lg:bottom-40 mx-auto bg-white/5 backdrop-blur-sm">
        <p className="text-4xl">Welcome to</p>
        <h1 className="text-4xl font-bold inline-block overflow-hidden border-r-4 border-orange-500 animate-typing">
          Al-hikmoh Montessori Academy
        </h1>
        <i>Where academic excellence is lightened up with Islamic knowledge</i>
      </div>
    </>
  );
};

export default Hero;
