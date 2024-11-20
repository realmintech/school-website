import React from 'react'

const AdmissionDetails = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-4xl font-bold mt-10">Welcoming Children To Our School</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 m-10 gap-3'>
          <div>
            <h1 className='text-4xl font-medium'>Al-hikmoh Montessori Academy Registration</h1>
          </div>
          <div>
            <p>
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

export default AdmissionDetails