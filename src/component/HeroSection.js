import React from 'react';
import Logo from '../assets/images/ken16f.jpg';
import KidsImage from '../assets/images/donation.jpg';

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen p-8 lg:mt-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Image Section */}
        <div className="relative">
          {/* Main Hero Image */}
          <img
            src= {Logo} // Replace with the actual image path
            alt="Ken16 Foundation helping children"
            className="rounded-full object-cover w-full h-auto"
          />
          {/* Second Image Overlay (like in the bottom of the main image) */}
          <img
            src={KidsImage} // Replace with the actual image path
            alt="Ken16 Foundation group"
            className="absolute bottom-0 right-0 w-40 h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Text Section */}
        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4 text- text-center">KEN 16 FOUNDATION</h1>

          {/* Help to Give Hope Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-red-500">Pillar To Give Hope.</h2>
            <p className="text-gray-700 mt-2">
            Ken16 Foundation is a legally registered organization that 
represents a pillar of hope, resolute in its mission to eradicate rural poverty and uplift the marginalized. Our vision is to empower underprivileged children through education and sports, aiming to be a catalyst for transformative and enduring change. 
With a sincere commitment to unity and the provision of essential resources, we endeavor to illuminate lives, illuminating the path to a future filled with promise. 
            </p>
          </div>

          {/* Help for Happiness Section */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">Pillar For Happiness.</h2>
            <p className="text-gray-700 mt-2">
            Join us in this journey of compassion and impactful change, as we strive to create a world where every child's dreams and aspirations can take flight. 
Together, we envisage a world where boundaries are broken, and opportunities flourish for the vulnerable, leaving a timeless imprint of empathy and empowerment on the fabric of society. 
In unity, we can achieve the extraordinary, fostering a brighter tomorrow for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
