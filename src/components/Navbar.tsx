"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/sch.png";
import Image from "next/image";
import { FaEnvelope, FaTimes, FaTimesCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-8 bg-lemon text-white px-2 md:px-16 lg:px-20 flex">
        <i className="mt-2">
          <FaEnvelope />
        </i>
        <span className="px-1 mt-1">Al-hikmohmontessoriacademy@gmail.com</span>
      </div>
      <nav className="bg-white shadow-lg sticky top-0 z-20">
        <div className="container mx-auto flex justify-between items-center md:px-4 lg:px-8">
          <div className="flex items-center gap-2">
            <Image
              src={Logo}
              priority
              alt="School Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
            />
            {/* <Link
              href="/"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-lemon"
            >
              Al-hikmoh
            </Link> */}
          </div>

          <div
            className="lg:hidden text-lemon text-3xl cursor-pointer"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <GiHamburgerMenu />}
          </div>

          <ul
            className={`fixed top-0 right-0 h-full bg-white z-30 transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } lg:translate-x-0 lg:relative lg:flex lg:items-center lg:space-x-1 w-64 lg:w-auto transition-transform duration-300 ease-in-out`}
          >
            <li className="flex justify-end p-4 lg:hidden">
              <button className="text-3xl text-lemon" onClick={toggleMenu}>
                <FaTimesCircle />
              </button>
            </li>

            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/news", label: "News/Event" },
              { href: "/gallery", label: "Gallery" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
              { href: "/portal", label: "Learner's portal" },
            ].map((item) => (
              <li
                key={item.href}
                className="text-lemon py-4 px-2 border-gray-200 cursor-pointer hover:text-orange"
              >
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
