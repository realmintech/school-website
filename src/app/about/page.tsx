import AboutHero from "@/components/AboutHero";
import History from "@/components/History";
import School from "../../../public/schoolCorridor.jpg";
import React from "react";

const page: React.FC = () => {
  return (
    <>
      <div>
        <AboutHero
          imageSrc={School}
          altText="School Corridor"
          headingText="About Us"
          styles={{
            container: "custom-container-class",
            image: "custom-image-class",
            heading: "custom-heading-class",
          }}
        />
        <History />
      </div>
    </>
  );
};

export default page;
