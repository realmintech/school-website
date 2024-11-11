import Image from "next/image";
import React from "react";
import School from "../../public/schoolCorridor.jpg";

const History = () => {
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
          <h1 className="text-4xl font-bold">AL-HIKMOH MONTESSORI ACADEMY</h1>
          <p>The school was established in 2020.</p>
          <Image src={School} alt="School" className="w-full" />
        </div>
        <div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-10 gap-5">
          <div>
            <h3 className="text-2xl font-medium">School Policy</h3>
            <p className="text-justify">
              The School Policy serves as a guiding document that outlines the
              rules, regulations, and expectations for students, staff, and
              parents within all school premises, including crèche,
              kindergerteen, nursery, primary, and secondary of Al-hikmoh
              Montessori Academy. This comprehensive Policy provides clarity and
              consistency in matters pertaining to academic performance,
              behaviour, attendance, health and safety, discipline, and overall
              school culture. The policy is designed to create a positive and
              conducive learning environment that fosters the holistic
              development of students.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Child Protection Policy</h3>
            <p className="text-justify">
              The Child Protection Policy is a comprehensive framework designed
              to ensure the safety, well-being, and protection of children
              within all school premises, including crèche, nursery, primary,
              secondary and pre-degree Chrisland Schools. This policy outlines
              the guidelines, procedures, and responsibilities that the
              institution, staff, parents, and students must adhere to in order
              to create a secure and nurturing environment for all children.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium">
              Parent Volunteer Information
            </h3>
            <p className="text-justify">
              Become a valued parent volunteer at our school! Your involvement
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
              environment that supports every student's growth and success.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Dress & Prohibition Code</h3>
            <p className="text-justify">
              All students will follow the dress code guidelines and policies
              outlined by the school. The school administration shall have the
              right to discipline a student who fails to follow the guidelines
              and policies.
            </p>
            <li>Student must wear black school shoes with soles.</li>
            <li>
              School uniform must be worn on campus without any amendments.
            </li>
            <li>Students must wear natural hear colour.</li>
            <li>Male student must keep there hair low.</li>
          </div>
        </div>
      </div>
      <div className="m-10">
        <h1 className="text-center text-4xl font-bold">
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
