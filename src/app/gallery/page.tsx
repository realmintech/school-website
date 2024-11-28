"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Modal from "react-modal";
import Fruit from "../../../public/assests/sch1.jpg";
import Sport from "../../../public/assests/sch5.jpg";
import Wear from "../../../public/assests/sch2.jpg";
import Computer from "../../../public/assests/sch6.jpg";
import Library from "../../../public/assests/sch3.jpg";
import Classroom from "../../../public/assests/sch8.jpg";
import Playground from "../../../public/assests/sch4.jpg";
import Field from "../../../public/assests/sch7.jpg";
import AboutHero from "@/components/AboutHero";

interface GalleryItem {
  img: StaticImageData;
}

const Gallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const datas: GalleryItem[] = [
    { img: Wear },
    { img: Fruit },
    { img: Library },
    { img: Field },
    { img: Classroom },
    { img: Fruit },
    { img: Computer },
    { img: Sport },
    { img: Wear },
    { img: Playground },
    { img: Computer },
    { img: Sport },
  ];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(null);
  };

  const previousImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + datas.length) % datas.length
      );
    }
  };

  const nextImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex + 1) % datas.length);
    }
  };

  return (
    <>
      <AboutHero
        imageSrc={Sport}
        altText="Gallery"
        headingText="Our Gallery"
        styles={{
          container: "custom-container-class",
          image: "custom-image-class",
          heading: "custom-heading-class",
        }}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 m-10">
        {datas.map((item, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className="cursor-pointer"
          >
            <Image
              src={item.img}
              alt={`Gallery image ${index + 1}`}
              className="w-40 h-36 border-4 border-lemon mb-8 align-middle"
              priority
            />
          </div>
        ))}
      </div>
      {isModalOpen && currentImageIndex !== null && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          appElement={document.getElementById("__next") || undefined}
          className="fixed inset-0 flex items-center justify-center p-4 mt-20"
          overlayClassName="fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center"
        >
          <div className="relative rounded-lg shadow-lg max-w-4xl w-full max-h-[80vh] flex items-center justify-center p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 bg-gray-800 text-white rounded-full p-2 text-3xl font-medium"
            >
              ✕
            </button>
            <button
              onClick={previousImage}
              className="absolute left-4 bg-gray-800 text-white rounded-full text-3xl font-bold p-2"
            >
              ←
            </button>

            <div className="relative max-h-[70vh]">
              <Image
                src={datas[currentImageIndex].img}
                alt="Modal image"
                className="max-h-[70vh] object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/60 rounded-md"></div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 bg-gray-800 text-white rounded-full text-3xl font-bold p-2"
            >
              →
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Gallery;
