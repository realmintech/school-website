import React from "react";
import Image from "next/image";
import School from "../../public/schoolCorridor.jpg";

const AboutHero = () => {
  return (
    <div className="relative w-full h-60 lg:h-[550px] md:h-40 overflow-hidden">
      <Image
        src={School}
        alt="girl"
        priority
        fill={true}
        className="object-cover"
      />
      <div className="absolute inset-0">
        <div className="text-center text-5xl font-bold mx-auto mt-14 md:mt-16 lg:mt-60 text-white">About Us</div>
      </div>
    </div>
  );
};

export default AboutHero;
