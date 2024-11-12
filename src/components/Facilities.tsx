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
  const data = [
    { title: "Class Room", image: ClassRoom },
    { title: "Computer Labouratory", image: ComputerLab },
    { title: "Playing Ground", image: PlayGround },
    { title: "Library", image: Library },
  ];
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
        {data.map((item, index) => (
          <div key={index} data-aos="zoom-in-up">
            <h1 className="text-2xl font-semibold">{item.title}</h1>
            <div className="w-full">
              <Image
                src={item.image}
                alt=""
                style={{height: '250px', width: '100%'}}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Facilities;
