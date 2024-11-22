import Image from "next/image";
import React from "react";
import School from "../../public/schoolCorridor.jpg";

const History = () => {
  const data = [
    {
      title: "School Policy",
      desc: `The School Policy serves as a guiding document that outlines the
              rules, regulations, and expectations for students, staff, and
              parents within all school premises, including crèche,
              kindergerteen, nursery, primary, and secondary of Al-hikmoh
              Montessori Academy. This comprehensive Policy provides clarity and
              consistency in matters pertaining to academic performance,
              behaviour, attendance, health and safety, discipline, and overall
              school culture. The policy is designed to create a positive and
              conducive learning environment that fosters the holistic
              development of students.`,
    },
    {
      title: "Child Protection Policy",
      desc: `The Child Protection Policy is a comprehensive framework designed
              to ensure the safety, well-being, and protection of children
              within all school premises, including crèche, nursery, primary,
              secondary and pre-degree Chrisland Schools. This policy outlines
              the guidelines, procedures, and responsibilities that the
              institution, staff, parents, and students must adhere to in order
              to create a secure and nurturing environment for all children.`,
    },
    {
      title: "Parent Volunteer Information",
      desc: `   Become a valued parent volunteer at our school! Your involvement
              is highly appreciated and contributes to creating a supportive and
              engaging learning community. Contact our school office for more
              information on how you can make a difference through volunteering.
              Join us in shaping the educational journey of our students today!
              The Parent Policy at Al-hikmoh Montessori Academy promotes a
              strong partnership between parents and the school, ensuring
              effective communication, involvement, and adherence to school
              policies. It emphasizes parent engagement in their child's
              education, participation in school activities, and cooperation
              with school guidelines. Together, we create a safe and inclusive
              environment that supports every student's growth and success.`,
    },
    {
      title: "Dress & Prohibition Code",
      desc: ` All students will follow the dress code guidelines and policies
              outlined by the school. The school administration shall have the
              right to discipline a student who fails to follow the guidelines
              and policies: 
            (i) Student must wear black school shoes with soles.
             (ii) School uniform must be worn on campus without any amendments.
          (iii) Students must wear natural hear colour.
          (iv) Male student must keep there hair low.`,
    },
  ];
  return (
    <>
      <div className="m-10">
        <h1 className="text-center text-3xl font-medium">Our Story</h1>
        <h3 className="text-center text-2xl font-medium">
          It all started with a deep commitment to creating a supportive
          environment that would provide her son with the best private home
          education.
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-10">
        <div>
          <h1 className="text-4xl font-bold mb-5">AL-HIKMOH MONTESSORI ACADEMY</h1>
          <p>The school was established in 2020.</p>
          <Image src={School} alt="School" className="w-full" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-5">FOUNDER'S NOTE</h1>
          <p>
            On July 23rd, 2020, Al-hikmoh Montessori Academy officially welcomes
            5 pupils to the school. With Mrs AbdulRaafi as the head teacher and
            Mrs as the admin officer. The proprietress and her team had a goal
            to provide the nuturing environment to give students the best
            private education in Nigeria. By the end of the session the students
            has grown to 21. All thanks to AL-mighty Allah and my team.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl font-bold">CODES & POLICY</h1>
        {data.map((item, index: number) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-5 p-10 mt-5 ${
              index === 0 || index === 2 ? "bg-lemon text-white" : ""
            }`}
          >
            <h1 className="text-4xl font-bold">{item.title}</h1>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="m-10">
        <h1 className="text-center text-4xl font-bold mb-5">
          ACCREDITATIONS & AFFLIATIONS
        </h1>
        <p className="text-justify ">
          Al-hikmoh Montessori Academy holds official recognition as an esteemed
          educational institution in Nigeria, duly approved by both the Federal
          Government of Nigeria and the Osun State Ministry of Education.
        </p>
      </div>
    </>
  );
};

export default History;
