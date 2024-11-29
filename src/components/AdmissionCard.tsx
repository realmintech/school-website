import React from "react";

const AdmissionCard = () => {
  const data = [
    {
      no: 1,
      step: "Step 1",
      desc: "Purchase admission form, fill and submit",
      instruction: "​Please read the information below carefully",
      statement:
        "​A payment of ₦​5,000 is required to begin the application process. Once purchased, parents or guardians are kindly requested to complete the Admission Form for their children. We value accurate and comprehensive information to ensure we have a proper record of each applicant.",
    },
    {
      no: 2,
      step: "Step 2",
      desc: "Admission Screening/Exam",
      instruction: "",
      statement:
        "All applicants accompanied by their parents or guardians will be invited to visit one of our esteemed Chrisland campus or assigned locations for a thoughtful and broad admissions exam. ​This engaging assessment allows us to assess their abilities in a holistic manner.",
    },
    {
      no: 3,
      step: "Step 3",
      desc: "Parent and applicant comprehensive interview",
      instruction: "",
      statement:
        "After successfully completing the admissions exam, parents or guardians and applicants will be invited to participate in a thorough interview process. This comprehensive interview serves as an evaluation to assess the suitability of the applicant and parents or guardians to determine the offer of admission. We prioritise creating a friendly environment where parents, guardians, and applicants can openly discuss their aspirations and academic goals. The interview provides us with valuable insights to make informed decisions regarding admission offers. At Chrisland Schools, we value transparency and ensure a fair and rigorous evaluation process.",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 m-10 gap-5 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg p-10 bg-lemon text-white"
          >
            <h3 className="text-6xl text-center font-bold mb-5">{item.no}</h3>
            <p className="text-center">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="m-10 text-sm tracking-wide leading-snug">
        <p>
          Al-hikmoh Montessori Academy admits children based on specific age
          groups. For crèche, we accept children between 3 and 11 months. For
          Pre-school One, children should be at least 1 year old by the end of
          December, and for Pre-school Two, at least 2 years old by that time.
          Reception One requires children to be 3 years old by December’s end,
          and Reception Two requires them to be at least 4 years old. For
          Primary School, we admit children aged 5 to 6, for Secondary School,
          ages 10 to 11, and for the Sixth Form program, students must be 16 or
          older.
        </p>
        <p>
          Kick start your child's application by scrolling down to the desired
          academic level. We look forward to guiding you through the process and
          welcoming your child into our inclusive learning community.
        </p>
      </div>
      {data.map((item, index: number) => (
        <div
          key={index}
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 px-10 py-40 mt-5 ${
            index === 0 || index === 2 ? "bg-lemon text-white" : ""
          }`}
        >
          <div>
            <h1 className="text-4xl font-bold">{item.step}</h1>
            <h1 className="text-3xl font-bold tracking-wide leading-snug">
              {item.desc}
            </h1>
          </div>
          <div>
            <p className="text-2xl font-bold">{item.instruction}</p>
            <p className="text-sm tracking-wide leading-snug ">
              {item.statement}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AdmissionCard;
