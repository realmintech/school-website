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
    // <div
    //   className={`relative w-full h-60 lg:h-[550px] md:h-80 overflow-hidden ${styles.container}`}
    // >
    //   <Image
    //     src={imageSrc}
    //     alt={altText}
    //     priority
    //     fill={true}
    //     className={`object-cover ${styles.image}`}
    //   />
    //   <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/60"></div>
    //   <div className="absolute inset-0 flex justify-center items-center">
    //     <div
    //       className={`text-center text-5xl font-bold text-white ${styles.heading}`}
    //     >
    //       {headingText}
    //     </div>
    //   </div>
    // </div>

    <div className='relative h-[250px] md:h-[400px] w-full flex items-center justify-center'>
    {/* Background Image with eager loading */}
    <Image
      src={imageSrc}
      alt='Hero Background'
      fill
      sizes='100vw'
      className='absolute inset-0 object-cover z-0'
      priority={true} 
    />

    {/* Overlay for improved text readability */}
    <div className='absolute inset-0 bg-black opacity-50'></div>

    {/* Centered Text */}
    <div className='relative z-10 text-center px-4'>
      <h1 className='text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight drop-shadow-lg'>
      {headingText}
      </h1>
    </div>
  </div>
  );
};

export default AboutHero;
