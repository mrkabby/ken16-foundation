import React from 'react';
import NavBar from '../component/Navbar';
import DinnerImage from '../assets/images/dinner with.jpg';
import LessPrivImage from '../assets/images/less priv.jpg';
import ChosenImage from '../assets/images/chosen children.jpg';
import DeafImage from '../assets/images/school for deaf.jpg';
import EmpowermentImage from '../assets/images/Empower.jpg';
import Logo from '../assets/images/ken16f.jpg';
import Footer from '../component/Footer';
import Gallery1 from '../assets/images/ken and teacher.jpg';
import Gallery2 from '../assets/images/all females.jpg';
import Gallery3 from '../assets/images/serve.jpg';
import Gallery4 from '../assets/images/kid camera.jpg';
import Award from '../assets/images/Award.jpg';


const ProgramsPage = () => {
  // Mock data for past and upcoming events with images
  const pastEvents = [
    { title: 'Dinner with the Kids', date: 'October 07, 2023', description: 'Money is not the only commodity that is fun to give. We can give time, we can give our expertise, we can give our love, or simply give a smile. What does that cost? The point is, none of us can ever run out of something worthwhile to give.-.Steve Goodier', image: DinnerImage },
    { title: 'Donation to Chosen Children Center', date: 'November 11, 2023', description: 'Teaching life skills and leadership to youth.', image: ChosenImage },
    { title: 'Donation to the Less Privileged', date: 'November 25, 2023', description: 'Providing clean water solutions to rural areas.', image: LessPrivImage },
    { title: 'Donation to School for the Deaf', date: 'June 25, 2024', description: 'Providing school supplies and support for underprivileged children.', image: DeafImage },
  ];

  const upcomingEvents = [
    { title: 'Empowerment Program', date: 'November 30, 2024', description: 'There is no joy compared to the joy that comes after given to the underprivileged. Let’s all learn to give not only when we have it in abundance but also with the little we have. And we will make the world a better place to be. God bless you.', image: EmpowermentImage },
    { title: 'NGO OF The Year', date: 'December 10, 2024', description: 'Promoting education opportunities for underprivileged children.', image: Award },
    { title: 'Community Garden Launch', date: 'January 25, 2024', description: 'Launching a community garden to provide sustainable food sources.', image: Logo },
    { title: 'Youth Sports Day', date: 'February 12, 2024', description: 'A sports day to encourage physical activity and teamwork.', image: Logo },
  ];

  // Mock gallery images
  const galleryImages = [
    { src: Gallery1 , alt: 'Event 1' },
    { src: Gallery2, alt: 'Event 2' },
    { src: Gallery3, alt: 'Event 3' },
    { src: Gallery4, alt: 'Event 4' }
  ];

  return (
    <>
    <NavBar />
    <div className="bg-blue-900 min-h-screen p-8 mt-20">
      <div className="container mx-auto space-y-12">

        {/* Upcoming Events Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-center text-white">Upcoming Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img src={event.image} alt={event.title} className="rounded-lg mb-4 w-full h-56 object-cover" />
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
                <p className="mt-2">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

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
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-center text-white">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" />
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
