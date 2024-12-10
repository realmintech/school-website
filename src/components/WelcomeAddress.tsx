import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Woman from "../../public/assests/sch5.jpg";

const WelcomeAddress = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 150,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center mt-20 mb-14 text-gray-900">
        Welcome Address By The Proprietress
      </h1>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-6 lg:px-12">
        {/* Image Section */}
        <div 
          data-aos="fade-left" 
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src={Woman}
            alt="Woman"
            className="object-cover w-full h-[350px] hover:scale-105 transition-transform duration-500 ease-out"
            priority
          />
        </div>

        {/* Text Section */}
        <div data-aos="fade-right">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 tracking-wide">
            As-salam Alaykun Waramotullah Wabarakatun
          </h2>
          <p className="text-base md:text-sm leading-relaxed text-gray-700 tracking-normal text-justify">
            In 2020, when I and the curriculum team started to create the 
            Al-hikmoh Montessori Academy curriculum, which blends the Montessori 
            method with Islamic values, I had a dream that Al-hikmoh Montessori 
            Academy would provide a joyful, prepared learning environment while 
            fostering children with a love for the Qur’an. <br /><br />

            With a unique environment, students not only learn to excel academically, 
            but also develop care, respect, and curiosity for the world around them, 
            guided by Islamic principles. <br /><br />

            Until 2024, Al-hikmoh Montessori Academy has served over 33 families. 
            This journey of chasing a dream is built on countless small details, 
            fueled by our love for Allah SWT and His creations. None of this would 
            have been possible without the dedicated support of our community — 
            including teachers, staff, parents, students, government officials, 
            and our neighborhood. <br /><br />

            We hope to continue collaborating with you to provide meaningful 
            education for the children of today and tomorrow, Insha Allah.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAddress;
