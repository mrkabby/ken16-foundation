import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../component/Navbar';
import DinnerImage from '../assets/images/dinner with.jpg';
import LessPrivImage from '../assets/images/less priv.jpg';
import ChosenImage from '../assets/images/chosen children.jpg';
import DeafImage from '../assets/images/school for deaf.jpg';
import EmpowermentImage from '../assets/images/Empower.jpg';
import Footer from '../component/Footer';
import Award from '../assets/images/Award.jpg';

const ProgramsPage = () => {
  const pastEvents = [
    {
      title: 'Dinner with the Kids',
      date: 'October 07, 2023',
      description: 'Money is not the only commodity that is fun to give...',
      image: DinnerImage,
      path: '/dinner-with-kids',
    },
    {
      title: 'Donation to Chosen Children Center',
      date: 'November 11, 2023',
      description: 'Teaching life skills and leadership to youth.',
      image: ChosenImage,
      path: '/chosen-children',
    },
    {
      title: 'Donation to the Less Privileged',
      date: 'November 25, 2023',
      description: 'Providing clean water solutions to rural areas.',
      image: LessPrivImage,
      path: '/less-privileged',
    },
    {
      title: 'Donation to School for the Deaf',
      date: 'June 25, 2024',
      description: 'Providing school supplies and support...',
      image: DeafImage,
      path: '/school-for-deaf',
    },
    {
      title: 'Empowerment Program',
      date: 'November 30, 2024',
      description: 'There is no joy compared to the joy that comes...',
      image: EmpowermentImage,
      path: '/empowerment-program',
    },
    {
      title: 'NGO Of The Year (Nominee)',
      date: 'December 10, 2024',
      description: 'Promoting education opportunities...',
      image: Award,
      path: '/ngo-award',
    },
  ];

  return (
    <>
      <NavBar />
      <div className="bg-blue-900 min-h-screen p-8 mt-20">
        <div className="container mx-auto space-y-12">

          {/* Past Events Section */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-center text-white">Past Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pastEvents.map((event, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <img src={event.image} alt={event.title} className="rounded-lg mb-4 w-full h-56 object-cover" />
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-gray-600">{event.date}</p>
                  <p className="mt-2">{event.description}</p>
                  <Link
                    to={event.path}
                    className="text-blue-500 hover:underline font-semibold mt-4 block"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProgramsPage;
