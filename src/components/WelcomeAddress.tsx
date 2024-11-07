import React from "react";
import Woman from "../../public/woman.png";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WelcomeAddress = () => {
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
      <div className="m-7">
        <h1 className="text-4xl font-bold text-center">
          Welcome Address By The Proprietress{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 px-3">
        <div data-aos="fade-left">
          <Image src={Woman} alt="Woman" priority />
        </div>
        <div data-aos="fade-right">
          <h1 className="text-3xl font-medium">
            As-salam Alaykun Waramotullah Wabarakatun
          </h1>
          <p>In the name of Allah the beneficient, the most merciful.</p>
          <p>
            In 2020, when I and curriculum’s team started to make an Al-hikmoh
            Montessori Academy curriculum which mix between Montessori and
            Islamic value, I have a dream that Al-hikmoh Montessori Academy will
            be a school that provide a joyful, prepared learning environment
            using Montessori method, but will also foster children with Loving
            Qur’an. <br /> With a unique environment, not only will they learn
            to work to the best of their ability, but they also learn to care
            for and respect others, understand the meaning of sharing and
            develop a natural curiosity of the world around them, including with
            our Islamic values. <br /> Until 2024, Al-hikmoh Montessori Academy
            has served more than 33 families. The journey of chasing a dream
            consists of thousands of small details fuelled by our love toward
            Allah SWT and His creations. It won’t happen without the generous
            and dedicated support from the school communities such as teachers,
            supporting staff, parents, students, government officials, and our
            neighborhood. We wish to collaborate with you to provide a
            meaningful education for young children of today and years to come —
            Insha Allah
          </p>
        </div>
      </div>
    </>
  );
};

export default WelcomeAddress;
