import React from 'react';

const AdmissionDetails = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-4xl font-extrabold text-gray-900 tracking-tight  mt-0 mb-10 leading-tight">
          Welcoming Children To Our School
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 mx-10 gap-8 my-6'>
          <div>
            <h2 className='text-3xl font-bold text-gray-800 mb-4 leading-snug'>
              Al-hikmoh Montessori Academy <br/>  Registration
            </h2>
          </div>
          <div>
            <p className='text-base text-gray-700 tracking-wide leading-relaxed'>
              To make the admission process more convenient for our families,
              parents can now complete their child's admission form online.
              Please be aware that a registration fee is required to secure an
              admission offer. If you have any questions, feel free to call us
              at 09063583756 or visit our location behind Onward Hospital,
              Halleluyah, Agunbelewo Area, Osogbo, Osun State.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdmissionDetails;