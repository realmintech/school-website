import React from "react";
import Computer from "../../public/computerLab.jpg";
import AboutHero from "./AboutHero";

const Admission = () => {
  return (
    <>
      <div className="relative w-full h-60 lg:h-[550px] md:h-40 overflow-hidden">
        <AboutHero
          imageSrc={Computer}
          altText="Computer"
          headingText="Admission Process"
          styles={{
            container: "custom-container-class",
            image: "custom-image-class",
            heading: "custom-heading-class",
          }}
        />
      </div>
    </>
  );
};

export default Admission;
