import React from 'react';
import LessPrivilegedImg from "../assets/images/less privilage.jpg";  // Replace with actual image path
import RuralAreasImg from '../assets/images/rural area.jpg';  // Replace with actual image path
import NaturalDisastersImg from '../assets/images/natural disaster.jpg';  // Replace with actual image path

function TargetGroups() {
  return (
    <section className="bg-red-700 text-white py-12 mt-10">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-4xl font-bold mb-10">OUR TARGET GROUPS</h2>
        
        {/* Target Group Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Less Privileged */}
          <div className="text-center">
            <img
              src={LessPrivilegedImg}
              alt="Less Privileged"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Less Privileged</h3>
            <p>
              We focus on individuals and families experiencing economic hardships, aiming to uplift their quality of life through our initiatives.
            </p>
          </div>

          {/* Rural Areas and Slums */}
          <div className="text-center">
            <img
              src={RuralAreasImg}
              alt="Rural Areas and Slums"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Rural Areas and Slums</h3>
            <p>
              Serving marginalized communities residing in rural areas and slums, addressing their unique needs and providing necessary support for progress.
            </p>
          </div>

          {/* Victims of Natural Disasters */}
          <div className="text-center">
            <img
              src={NaturalDisastersImg}
              alt="Victims of Natural Disasters"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Victims of Natural Disasters</h3>
            <p>
              Extending a helping hand to those affected by natural calamities, providing immediate relief and support during challenging times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TargetGroups;
