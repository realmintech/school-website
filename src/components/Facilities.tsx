import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images with more descriptive names
import playgroundImage from '../../public/playGround.jpg';
import computerLabImage from '../../public/computerLab.jpg';
import classRoomImage from '../../public/assests/sch6.jpg';
import libraryImage from '../../public/schoolCorridor.jpg';


const Facilities: React.FC = () => {
  // Strongly typed data array with optional description
  const facilities =[
    { 
      title: "Class Room", 
      image: classRoomImage,
      description: "Modern, well-equipped learning spaces designed for interactive education."
    },
    { 
      title: "Computer Laboratory", 
      image: computerLabImage,
      description: "State-of-the-art computer facilities for digital learning and technology education."
    },
    { 
      title: "Playing Ground", 
      image: playgroundImage,
      description: "Spacious outdoor area promoting physical education and team sports."
    },
    { 
      title: "Library", 
      image: libraryImage,
      description: "Quiet study area with extensive collection of books and digital resources."
    }
  ];

  // Initialize AOS with more comprehensive configuration
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      offset: 200,
      easing: "ease-in-sine",
      disable: false,
      startEvent: 'DOMContentLoaded'
    });
  }, []);

  return (
    <section 
      className="container mx-auto  py-12"
      aria-labelledby="facilities-heading"
    >
      <h2 
        id="facilities-heading" 
        className="text-4xl text-center mb-10 font-bold text-gray-800 tracking-tight"
      >
        Our School Facilities
      </h2>
      
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        role="list"
      >
        {facilities.map((facility, index) => (
          <div 
            key={index} 
            data-aos="zoom-in-up"
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            role="listitem"
          >
            <div className="relative h-64 w-full">
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
                placeholder="blur"
              />
            </div>
            
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {facility.title}
              </h3>
              {facility.description && (
                <p className="text-sm text-gray-600">
                  {facility.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;