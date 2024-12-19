import AdmissionCard from '@/components/AdmissionCard'
import AdmissionDetails from '@/components/AdmissionDetails'
import Admission from '@/components/Admission'
import React from 'react'

export const metadata = {
  title: "Admission page",
};

const page = () => {
  return (
    <>
     <Admission />
     <AdmissionDetails />
     <AdmissionCard />
    </>
  )
}

export default page