import React from "react";
import YouTubeVideo from "./YoutubeVideo";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Enrollment = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      offset: 200,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2" data-aos="fade-right">
        <div>
          <h1 className="text-4xl font-bold">
            Registration & <br /> Enrollment Ongoing...
          </h1>
          <p className="my-3">
            You can still enrol your child or ward into our Creche,
            Kindergerteen, Nursery, Primary and Secondary schools. Click the
            link below to fill the online registration form or download an
            offline form and submit at any of our school premises.
          </p>
          <div className="">
            <button className="bg-lemon text-white p-2 rounded-2xl border-none mb-3 hover:bg-white hover:text-lemon hover:border">
              APPLY TODAY
            </button>
            <br />
            <button className="bg-white text-lemon border p-2 rounded-2xl border-none mb-3 hover:bg-lemon hover:text-white hover:border">
              DOWNLOAD FORM
            </button>
          </div>
        </div>
        <div data-aos="fade-left">
          <YouTubeVideo />
        </div>
      </div>
    </>
  );
};

export default Enrollment;
