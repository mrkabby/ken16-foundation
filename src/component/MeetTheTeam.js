import React from 'react';
import KenAddo from "../assets/images/Ken Addo.jpg"
import Henrietta from '../assets/images/Henrietta Gyamfuah.jpg'
import Evans from '../assets/images/Mr. Evans Klof Addo.jpg'

function MeetTheTeam() {
    
  const teamMembers = [
    {
      name: 'Ken Addo',
      title: 'Founder & CEO',
      description: 'Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis from dolor amet.',
      image: KenAddo, // Replace with actual image path
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Ms. Belinda Efia Bondzie',
      title: 'Director',
      description: 'Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis from dolor amet.',
      image: Henrietta, // Replace with actual image path
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Evans Kofi Addo',
      title: 'Director',
      description: 'Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis from dolor amet.',
      image: Evans, // Replace with actual image path
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Mr. Raphael Laryea',
      title: 'Chief Accountant',
      description: 'Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis from dolor amet.',
      image: '', // Replace with actual image path
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Mr. Emmanuel Donkor',
      title: 'Programs Manager/ Organizer',
      description: 'Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis from dolor amet.',
      image: '', // Replace with actual image path
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
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
              <div className="flex justify-center space-x-4">
                <a href={member.social.facebook} target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f text-blue-600"></i>
                </a>
                <a href={member.social.twitter} target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter text-blue-400"></i>
                </a>
                <a href={member.social.instagram} target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram text-pink-500"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetTheTeam;
