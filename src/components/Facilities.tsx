import Image from "next/image";
import React from "react";
import PlayGround from "../../public/playGround.jpg";
import ComputerLab from "../../public/computerLab.jpg";
import ClassRoom from "../../public/classroom2.jpg";
import Library from "../../public/schoolCorridor.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Facilities = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      offset: 200,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <>
      <h1 className="text-4xl text-center pb-6 font-bold">Our Facilities</h1>
      <div className="grid md:grid-cols-4 gap-4">
        <div data-aos="zoom-in-up">
          <h1 className="text-2xl font-semibold">Class Room</h1>
          <Image
            src={ClassRoom}
            alt=""
            width={450}
            height={450}
            className="object-cover"
          />
        </div>
        <div data-aos="zoom-in-down">
          <h1 className="text-2xl font-semibold">Library</h1>
          <Image
            src={Library}
            alt=""
            width={450}
            height={450}
            className="object-cover"
          />
        </div>
        <div data-aos="zoom-in-up">
          <h1 className="text-2xl font-semibold">Computer Laboratory</h1>
          <Image
            src={ComputerLab}
            alt=""
            width={450}
            height={450}
            className="object-cover"
          />
        </div>
        <div data-aos="zoom-in-down">
          <h1 className="text-2xl font-semibold">Playing Ground</h1>
          <Image
            src={PlayGround}
            alt=""
            width={450}
            height={450}
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Facilities;
