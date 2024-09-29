import React from 'react'
import ImpactImage from "../assets/images/IMG_1347.jpg";

const VisionSection = () => {
  return (
    <div className="bg-pink-100 min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Vision, Mission, Core Values */}
          <div className="bg-pink-200 p-8 rounded-lg shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">VISION</h2>
              <p className="text-gray-700">
                Unlocking every child’s potential by ending childhood hunger,
                ensuring quality education, and creating safe spaces for play
                and activity.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">MISSION</h2>
              <p className="text-gray-700">
                Bringing hope and smiles to the less privileged by providing
                essential resources and fostering unity through education and
                games.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">CORE VALUES</h2>
              <ul className="list-disc list-inside">
                <li>Compassion</li>
                <li>Integrity</li>
                <li>Empowerment</li>
                <li>Collaboration</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Images */}
          <div className="flex flex-col gap-4">
            <img
              src={ImpactImage}
              alt="Ken 16 Foundation Team"
              className="rounded-lg shadow-lg"
            />
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisionSection