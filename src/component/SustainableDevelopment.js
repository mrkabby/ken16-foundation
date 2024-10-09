import React from "react";
import SDG3 from "../assets/images/SDG 3.png"; // Replace with actual path to SDG 3 image
import SDG4 from "../assets/images/SDG 4.png"; // Replace with actual path to SDG 4 image
import SDG2 from "../assets/images/SDG 2.png"; // Replace with actual path to SDG 2 image
import SDG6 from "../assets/images/SDG 6.png"; // Replace with actual path to SDG 6 image
import ImpactImage from "../assets/images/book cover.jpg"; // Replace with actual path to image with children

function SustainableDevelopment() {
  return (
    <section className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-6">Our Priority SDGs</h2>
        
        {/* Description */}
        <p className="text-justify max-w-3xl mx-auto mb-8">
          The KEN16 Foundation prioritizes Sustainable Development Goals (SDGs) 2, 6, 3, and 4. These goals are central to our mission of addressing hunger, providing clean water and sanitation, ensuring good health and well-being, and promoting quality education. Through targeted initiatives and strategic efforts, we are dedicated to making a meaningful impact in these vital areas, contributing to a better, more sustainable world.
        </p>
        
        {/* Images and Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
          <img
            src={ImpactImage}
            alt="Ken 16 Foundation's Impact"
            className="rounded-lg shadow-lg"
          />
          
          {/* SDG Goals */}
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="flex flex-col items-center">
              <img src={SDG3} alt="Good Health and Well-being" className="w-44 h-44 mb-2" />
              <p className="text-center text-black  ">Good Health and Well-being (SDG 3)</p>
            </div>

            <div className="flex flex-col items-center">
              <img src={SDG4} alt="Quality Education" className="w-44 h-44 mb-2" />
              <p className="text-center text-black ">Quality Education (SDG 4)</p>
            </div>

            <div className="flex flex-col items-center">
              <img src={SDG2} alt="Zero Hunger" className="w-44 h-44 mb-2" />
              <p className="text-center text-black ">Zero Hunger (SDG 2)</p>
            </div>

            <div className="flex flex-col items-center">
              <img src={SDG6} alt="Clean Water and Sanitation" className="w-44 h-44 mb-2" />
              <p className="text-center text-black ">Clean Water and Sanitation (SDG 6)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SustainableDevelopment;
