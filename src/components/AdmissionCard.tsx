import React from "react";

const AdmissionCard = () => {
  const data = [
    {
      no: 1,
      desc: "Purchase admission form, fill and submit",
    },
    {
      no: 2,
      desc: "Admission Screening/Exam",
    },
    {
      no: 3,
      desc: "Parent and applicant comprehensive interview",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-lemon text-white m-10 ">
        {data.map((item, index) => (
          <div key={index} className="shadow-lg rounded-lg p-10 gap-5">
            <h3 className="text-6xl text-center font-bold mb-5">{item.no}</h3>
            <p className="text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdmissionCard;
