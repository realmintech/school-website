import React from "react";
import Logo from "../../public/sch.png";
import { FaEnvelope, FaFacebook, FaPhone, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 gap-6 mx-auto justify-evenly items-start container-fluid bg-lemon text-white text-sm tracking-wide leading-snug">
      <div className="text-center">
        <Image
          src={Logo}
          alt="Al-hikmoh"
          className="w-full max-w-xs h-[200px] mx-auto object-cover mt-8"
        />
      </div>
      <div className="text-center md:text-left lg:mt-14 md:mt-12">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/news">News/Event</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
        </ul>
      </div>
      <div className="text-center md:text-left md:ml-14 lg:ml-0 mt-14 md:mb-20">
        <h3 className="text-2xl">Connect With Us</h3>
        <div className="flex gap-4 my-2 justify-center md:justify-start">
          <FaFacebook className="text-2xl" />
          <FaEnvelope className="text-2xl" />
          <FaYoutube className="text-2xl" />
          <FaPhone className="text-2xl" />
        </div>
        <div>
          <p>09063583756</p>
          <h5>
            Behind Onward Hospital, Halleluyah,
            <br />
            Agunbelewo Area, Osogbo, Osun State.
          </h5>
        </div>
      </div>
      <div className="text-center md:text-left mt-14 mb-10 md:mb-20">
        <h3 className="text-2xl">The Al-hikmoh Academy</h3>
        <p>
          We are committed to raising God fearing Leaders who would aim for
          excellence in all their endeavor.
        </p>
      </div>
    </div>
  );
};

export default Footer;
