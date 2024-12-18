import AboutHero from "@/components/AboutHero";
import Computer from '../../../public/computerLab.jpg'
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page",
};

const page: React.FC = () => {
  return (
    <>
      <AboutHero
        imageSrc={Computer}
        altText="Computer"
        headingText="Contact Us"
        styles={{
          container: "custom-container-class",
          image: "custom-image-class",
          heading: "custom-heading-class",
        }}
      />
      <div className="mx-10">
        <div className="">
          <h1 className="text-4xl font-extrabold text-center mt-20 mb-14 text-gray-900">
            GET IN TOUCH
          </h1>
          <p className="text-center text-sm tracking-wide leading-snug ">
            Welcome to our Contact page! Get in touch with us effortlessly. Find
            the phone numbers for each school branch and a dedicated email for
            all branches. We're here to assist you promptly and warmly welcome
            your inquiries or visits.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 my-8">
            <div className="my-2">
              <h1 className="text-2xl mb-1 font-medium tracking-tight leading-snug">
                Al-hikmoh Primary School, Halleluyah Estate
              </h1>
              <p className="text-sm tracking-wide leading-snug">
                Behind Onward Hospital, Halleluyah,
                <br /> Agunbelewo Area, Osogbo, Osun State.
              </p>
            </div>
            <div className="my-2">
              <h1 className="text-2xl mb-1 font-medium tracking-tight leading-snug">
                Al-hikmoh Secondary School, Agunbelewo
              </h1>
              <p className="text-sm tracking-wide leading-snug">
                Behind Onward Hospital, Halleluyah,
                <br /> Agunbelewo Area, Osogbo, Osun State.
              </p>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.833433931387!2d4.531647470197273!3d7.807451089728532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787b59461a053%3A0xa5cddbcc61496d18!2sAgunbelewo%20Area!5e0!3m2!1sen!2sng!4v1731335605229!5m2!1sen!2sng"
              className="w-full h-[450px] rounded-lg shadow-md"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-10 ">
            <form action="">
              <h1 className="text-3xl font-medium text-center mb-5">
                Please fill out the form below and we will be in touch with you.
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="p-3 my-1 outline-lemon shadow-md rounded-lg"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="p-3 my-1 outline-lemon shadow-md rounded-lg"
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  className="p-3 my-1 outline-lemon shadow-md rounded-lg"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="p-3 my-1 outline-lemon shadow-md rounded-lg"
                  placeholder="Subject"
                />
              </div>
              <textarea
                name=""
                id=""
                placeholder="Leave a Message"
                className="w-full p-3 mt-4 h-[200px]  outline-lemon shadow-md rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="bg-lemon mt-2 mb-10 shadow-md rounded-lg text-white  p-3 w-full"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
