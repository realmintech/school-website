"use client";
import ClassCategory from "@/components/ClassCategory";
import Enrollment from "@/components/Enrollment";
import Facilities from "@/components/Facilities";
import Hero from "@/components/Hero";
import PillsComponent from "@/components/PillsComponent";
import WelcomeAddress from "@/components/WelcomeAddress";


export default function Home() {
 
  return (
    <>
      <div className="relative">
        <Hero />
        <div className="absolute top-72 md:top-48 lg:top-96 transform translate-y-10 left-0 right-0 mx-4 md:mx-auto flex justify-center ">
          <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-2 lg:grid-cols-4 w-full md:w-full">
            <ClassCategory />
          </div>
        </div>
      </div>
      <div className="mt-[600px] md:mt-80 lg:mt-20 px-4 md:px-0 mx-auto py-3">
        <WelcomeAddress />
      </div>
      <div style={{ border: "40px solid #00712D" }}>
        <PillsComponent />
      </div>
      <div className="mx-4 my-14 px-4">
        <Enrollment />
      </div>
      <div className="m-10">
        <Facilities />
      </div>
    </>
  );
}
