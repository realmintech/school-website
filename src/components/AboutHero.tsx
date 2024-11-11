import React from "react";
import Image from "next/image";
import School from "../../public/schoolCorridor.jpg";

const AboutHero = () => {
  return (
    <div className="relative w-full h-40 lg:h-96 md:h-40 overflow-hidden">
      <Image
        src={School}
        alt="girl"
        priority
        fill={true}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-orange to-transparent opacity-70">
        <div className="text-center text-5xl font-bold mx-auto mt-10 md:mt-16 lg:mt-40 text-lemon">About Us</div>
      </div>
    </div>
  );
};

export default AboutHero;
