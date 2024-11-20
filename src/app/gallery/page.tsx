import Image from "next/image";
import React from "react";
import Fruit from "../../../public/fruit.jpg";
import Sport from "../../../public/sportWear.jpg";
import Wear from "../../../public/children.jpg";
import Computer from "../../../public/computerLab.jpg";
import Library from "../../../public/dinning.jpg";
import Classroom from "../../../public/classroom.jpg";
import Playground from "../../../public/playGround.jpg";
import Field from "../../../public/dinning.jpg";
import AboutHero from "@/components/AboutHero";

const Gallery: React.FC = () => {
  const data = [
    { img: Fruit },
    { img: Computer },
    { img: Sport },
    { img: Wear },
    { img: Fruit },
    { img: Library },
    { img: Field },
    { img: Classroom },
    { img: Playground },
    { img: Computer },
    { img: Sport },
    { img: Wear },
  ];
  return (
    <>
      <AboutHero
        imageSrc={Sport}
        altText="Gallery"
        headingText="Our Gallery"
        styles={{
          container: "custom-container-class",
          image: "custom-image-class",
          heading: "custom-heading-class",
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-10">
        {data.map((item, index) => (
          <div key={index}>
            <Image
              src={item.img}
              alt="Gallery image"
              className=" rounded-md shadow-md"
              priority
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
