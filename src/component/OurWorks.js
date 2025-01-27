import React from 'react';
import WorkImage from '../assets/images/group pic.jpg';  // Replace with actual image path

function OurWork() {
  return (
    <section className=" text-white pt-10  ">
      <div className="container mx-auto px-4">
        

        {/* Top Section with Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-500 p-6 rounded-lg flex items-center justify-center">
            <h3 className="text-3xl font-bold">OUR WORK</h3>
          </div>
          <img
            src={WorkImage}
            alt="Our Work"
            className="w-full h-68 object-cover rounded-lg"
          />
        </div>

        {/* Work Details */}
        <div className="bg-blue-800 py-8 px-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Work 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white text-red-600 text-lg font-bold w-12 h-12 flex items-center justify-center rounded-full">
                  01
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bead Making</h3>
              <p>
                We empower individuals through skill development in bead crafting, encouraging creativity and entrepreneurship.
              </p>
            </div>

            {/* Work 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white text-red-600 text-lg font-bold w-12 h-12 flex items-center justify-center rounded-full">
                  02
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 ">Hair and Wig Making</h3>
              <p>
                We provide training and opportunities in hair and wig making to enhance employability and self-sustainability.
              </p>
            </div>

            {/* Work 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white text-red-600 text-lg font-bold w-12 h-12 flex items-center justify-center rounded-full">
                  03
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sports</h3>
              <p>
                Promoting physical fitness, teamwork, and unity among underprivileged youth through engaging sports activities.
              </p>
            </div>
            {/* Work 4 */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white text-red-600 text-lg font-bold w-12 h-12 flex items-center justify-center rounded-full">
                  04
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Creativity
              through Arts</h3>
              <p>
              Nurturing artistic talents and creativity through various art forms, fostering self-expression and personal growth
              </p>
            </div>
            {/* Work 5 */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white text-red-600 text-lg font-bold w-12 h-12 flex items-center justify-center rounded-full">
                  05
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Donations to Orphanage Homes</h3>
              <p>
              Extending support to orphanages by providing essential items and spreading joy and love to the children in need.
              </p>
            </div>
            {/* Work 6*/}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white text-red-600 text-lg font-bold w-12 h-12 flex items-center justify-center rounded-full">
                  06
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Feeding the Sick</h3>
              <p>
              Ensuring adequate nutrition and care for the sick, promoting recovery and improved health outcomes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurWork;
