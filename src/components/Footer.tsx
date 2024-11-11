import React from "react";
import Logo from "../../public/sch.png";
import { FaEnvelope, FaFacebook, FaPhone, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto justify-evenly items-center container-fluid bg-lemon text-white">
        <div className="text-center">
          <div>
            <Image
              src={Logo}
              alt="Al-hikmoh"
              className="w-full max-w-xs h-auto mx-auto object-cover"
            />
          </div>
        </div>
        <div className="text-center md:text-left mb-14 md:mb-0 lg:mb-0">
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
        <div className="text-center md:text-left">
          <h3 className="text-2xl">Connect With Us</h3>
          <div className="flex gap-4 my-2 justify-center md:justify-start">
            <FaFacebook className="text-2xl" />
            <FaEnvelope className="text-2xl" />
            <FaYoutube className="text-2xl" />
            <FaPhone className="text-2xl" />
          </div>
          <div className="md:text-left">
            <p>09063583756</p>
            <h3>AL_HIKMOH MONTESSORI ACADEMY</h3>
            <h5>
              Behind Onward Hospital, Halleluyah,
              <br /> Agunbelewo Area, Osogbo, Osun State.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
