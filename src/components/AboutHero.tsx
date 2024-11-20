import React from "react";
import Image, { StaticImageData } from "next/image";

interface AboutHeroProps {
  imageSrc: string | StaticImageData; 
  altText: string; 
  headingText: string; 
  styles?: {
    container?: string; 
    image?: string; 
    heading?: string; 
  };
}

const AboutHero: React.FC<AboutHeroProps> = ({
  imageSrc,
  altText,
  headingText,
  styles = {},
}) => {
  return (
    <div
      className={`relative w-full h-60 lg:h-[550px] md:h-40 overflow-hidden ${styles.container}`}
    >
      <Image
        src={imageSrc}
        alt={altText}
        priority
        fill={true}
        className={`object-cover ${styles.image}`}
      />
      <div className="absolute inset-0">
        <div
          className={`text-center text-5xl font-bold mx-auto mt-14 md:mt-16 lg:mt-60 text-white ${styles.heading}`}
        >
          {headingText}
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
