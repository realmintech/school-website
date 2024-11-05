import Image from "next/image";
import React from "react";
import PlayGround from "../../public/playGround.jpg";
import ComputerLab from "../../public/computerLab.jpg";
import ClassRoom from "../../public/classroom2.jpg";
import Library from "../../public/schoolCorridor.jpg";

const Facilities = () => {
  return (
    <>
      <h1 className="text-4xl text-center pb-6 font-bold">Our Facilities</h1>
      <div className="grid md:grid-cols-4 gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Class Room</h1>
          <Image
            src={ClassRoom}
            alt=""
            width={450}
            height={450}
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Library</h1>
          <Image
            src={Library}
            alt=""
            width={450}
            height={450}
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Computer Laboratory</h1>
          <Image
            src={ComputerLab}
            alt=""
            width={450}
            height={450}
            className="object-cover"
          />
        </div>
        <div>
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
