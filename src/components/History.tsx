import React from 'react';
import Image from 'next/image';
import schoolCorridorImage from '../../public/schoolCorridor.jpg';

interface Policy {
  title: string;
  description: string;
}

const PolicyCard: React.FC<{ policy: Policy; index: number }> = ({ policy, index }) => {
  return (
    <article
      className={`grid md:grid-cols-2 gap-8 items-start p-10 mb-8 rounded-lg shadow-md ${
        index % 2 === 0 ? 'bg-yellow-50' : 'bg-white'
      }`}
    >
      <header>
        <h3 className="text-3xl font-bold text-gray-900">{policy.title}</h3>
      </header>
      <p className="text-gray-700 leading-relaxed">{policy.description}</p>
    </article>
  );
};

const History: React.FC = () => {
  const policyData: Policy[] = [
    {
      title: 'School Policy',
      description: `The School Policy serves as a guiding document that outlines the rules, regulations, and expectations for students, staff, and parents within all school premises, including crèche, kindergarten, nursery, primary, and secondary of Al-hikmoh Montessori Academy. This comprehensive Policy provides clarity and consistency in matters pertaining to academic performance, behaviour, attendance, health and safety, discipline, and overall school culture.`,
    },
    {
      title: 'Child Protection Policy',
      description: `The Child Protection Policy is a comprehensive framework designed to ensure the safety, well-being, and protection of children within all school premises. This policy outlines guidelines and responsibilities to create a secure environment.`,
    },
    {
      title: 'Parent Volunteer Information',
      description: `Become a valued parent volunteer at our school! Your involvement contributes to a supportive learning community. Contact the school office for more details. Together, we create a safe and inclusive environment that supports every student's growth.`,
    },
    {
      title: 'Dress & Prohibition Code',
      description: `Students must adhere to the dress code:
        - Black school shoes are mandatory.
        - Uniforms should be worn as issued without amendments.
        - Only natural hair colors are allowed.
        - Male students must maintain short haircuts.`,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          It all started with a deep commitment to creating a supportive environment that would provide her son with the best private home education.
        </p>
      </section>

      {/* School Introduction */}
      <section className="grid md:grid-cols-2 gap-10 py-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            AL-HIKMOH MONTESSORI ACADEMY
          </h2>
          <p className="text-gray-600 mb-6">The school was established in 2020.</p>
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={schoolCorridorImage}
              alt="School Corridor"
              fill
              className="object-cover rounded-lg shadow-md"
              placeholder="blur"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-5">FOUNDER'S NOTE</h2>
          <p className="text-gray-600 leading-relaxed">
            On July 23rd, 2020, Al-hikmoh Montessori Academy officially welcomed 5 pupils to the school. By the end of the session, the students had grown to 21. All thanks to Al-mighty Allah and the dedicated team.
          </p>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-8">
        <header className="text-center mb-0 md:mb-12">
          <h2 className="text-4xl  font-bold text-gray-900">CODES & POLICY</h2>
        </header>
        {policyData.map((policy, index) => (
          <PolicyCard key={index} policy={policy} index={index} />
        ))}
      </section>

      {/* Accreditations */}
      <section className="text-center py-8 bg-gray-100 rounded-lg shadow-sm">
        <header className="mb-6">
          <h2 className="text-4xl font-bold text-gray-900">ACCREDITATIONS & AFFILIATIONS</h2>
        </header>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Al-hikmoh Montessori Academy holds official recognition as an esteemed educational institution in Nigeria, duly approved by both the Federal Government of Nigeria and the Osun State Ministry of Education.
        </p>
      </section>
    </div>
  );
};

export default History;
