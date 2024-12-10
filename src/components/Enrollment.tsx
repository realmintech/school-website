import React, { useEffect } from "react";
import YouTubeVideo from "./YoutubeVideo";
import AOS from "aos";
import "aos/dist/aos.css";

const Enrollment = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 150,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-right">
        {/* Text Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Registration & <br /> Enrollment Ongoing...
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
            You can still enroll your child or ward into our Creche, Kindergarten, 
            Nursery, Primary, and Secondary schools. Click the link below to fill out 
            the online registration form or download an offline form and submit it 
            at any of our school premises.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-lemon text-white py-3 px-6 rounded-xl font-medium shadow-lg transition duration-300 hover:bg-white hover:text-lemon hover:ring-2 hover:ring-lemon">
              APPLY TODAY
            </button>
            <button className="bg-white text-lemon py-3 px-6 rounded-xl font-medium shadow-lg border border-lemon transition duration-300 hover:bg-lemon hover:text-white">
              DOWNLOAD FORM
            </button>
          </div>
        </div>

        {/* Video Section */}
        <div data-aos="fade-left">
          <YouTubeVideo />
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
