import React from 'react';
import KenAddo from "../assets/images/ken.jpg";
import Belinda from '../assets/images/Belinda.jpg';
import Evans from '../assets/images/evans.jpg';
import Raphael from '../assets/images/laryea.jpg';
import Emmanuel from '../assets/images/emmanuel.jpg';

function MeetTheTeam() {

  const teamMembers = [
    {
      name: 'Ken Addo',
      title: 'Founder & CEO',
      description: 'As Founder and CEO, Ken leads the vision and strategic direction of the organization, ensuring alignment with our core mission and values.',
      image: KenAddo,
    },
    {
      name: 'Ms. Belinda Efia Bondzie',
      title: 'Director',
      description: 'Belinda oversees organizational operations, focusing on growth initiatives, partnerships, and long-term planning.',
      image: Belinda,
    },
    {
      name: 'Evans Kofi Addo',
      title: 'Director',
      description: 'Evans supports strategic decision-making and provides leadership across various departments to achieve organizational goals.',
      image: Evans,
    },
    {
      name: 'Mr. Raphael Laryea',
      title: 'Chief Accountant',
      description: 'Raphael manages financial operations, including budgeting, reporting, and ensuring compliance with financial regulations.',
      image: Raphael,
    },
    {
      name: 'Mr. Emmanuel Donkor',
      title: 'Programs Manager/ Organizer',
      description: 'Emmanuel coordinates programs and events, ensuring seamless execution and alignment with our objectives.',
      image: Emmanuel,
    }
  ];

  return (
    <section className="bg-blue-800 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white text-4xl font-bold mb-8">Meet The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.title}</p>
              <p className="text-gray-700 mb-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetTheTeam;
