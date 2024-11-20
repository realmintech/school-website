import React from "react";
import Fruit from '../../../public/fruit.jpg';
import Sport from '../../../public/sportWear.jpg'
import Wear from '../../../public/children.jpg'
import Computer from '../../../public/computerLab.jpg'
import Image from "next/image";
import AboutHero from "@/components/AboutHero";


const News: React.FC = () => {
  const data = [
    {
      title: "Fruit Week",
      img: Fruit,
      desc: "Seven different types of fruits were dished for student, lectured on the vitamins each fruits contains.",
    },
    {
      title: "Inter House Sport",
      img: Sport,
      desc: "Student are to wear their sport wear on wednesdays.",
    },
    {
      title: "Friday wear",
      img: Wear,
      desc: "Student should wear the school Jumuat wear on every friday.",
    },
    {
      title: "Computer CLass",
      img: Computer,
      desc: "This is a class where student are taught computer essentials and python programming language",
    },
    {
      title: "Fruit Week",
      img: Fruit,
      desc: "Seven different types of fruits were dished for student, lectured on the vitamins each fruits contains.",
    },
    {
      title: "Inter House Sport",
      img: Sport,
      desc: "Student are to wear their sport wear on wednesdays.",
    },
    {
      title: "Friday wear",
      img: Wear,
      desc: "Student should wear the school Jumuat wear on every friday.",
    },
    {
      title: "Computer CLass",
      img: Computer,
      desc: "This is a class where student are taught computer essentials and python programming language",
    },
  ];
  return (
    <>
      <AboutHero
        imageSrc={Wear}
        altText="News and Event"
        headingText="News/Event"
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
              alt="Image"
              className="w-[100%] h-[250px] rounded-md shadow-md"
              priority
            />
            <h1 className="text-3xl font-medium mt-2">{item.title}</h1>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
