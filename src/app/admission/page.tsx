import AdmissionCard from '@/components/admissionCard'
import AdmissionDetails from '@/components/AdmissionDetails'
import Admission from '@/components/AdmissionHero'
import React from 'react'

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