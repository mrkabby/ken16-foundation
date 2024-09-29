import React from 'react';

function SustainabilityPlan() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-6">Our Sustainability Plan</h2>
        <p className="text-center mb-10">
          Our sustainability plan encompasses three thematic areas: institutional, project, and financial sustainability.
        </p>

        {/* Sustainability Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Institutional Sustainability */}
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Institutional Sustainability</h3>
            <ul className="list-disc list-inside">
              <li>Establish a strong board of directors with diverse expertise in sustainability and philanthropy.</li>
              <li>Implement a clear succession plan to ensure continuity of leadership and institutional knowledge.</li>
              <li>Maintain a transparent grants and funding allocation process aligned with the foundation’s mission and values.</li>
              <li>Engage with stakeholders for feedback and informed decision-making.</li>
              <li>Invest in training and development programs for staff and volunteers.</li>
            </ul>
          </div>

          {/* Project Sustainability */}
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Project Sustainability</h3>
            <ul className="list-disc list-inside">
              <li>Prioritize projects that align with the foundation’s mission and have a clear plan for sustainability.</li>
              <li>Involve stakeholders in the project design phase for local input and needs.</li>
              <li>Encourage community participation and ownership of projects for long-term sustainability.</li>
              <li>Use feedback from evaluations to improve project designs and strategies.</li>
              <li>Promote entrepreneurship and income-generating activities for financial sustainability at the local level.</li>
            </ul>
          </div>

          {/* Financial Sustainability */}
          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Financial Sustainability</h3>
            <ul className="list-disc list-inside">
              <li>Develop a fundraising strategy with grant applications, sponsorships, and events.</li>
              <li>Establish an endowment fund for ongoing operational income.</li>
              <li>Regularly review financial processes for cost-saving opportunities.</li>
              <li>Explore income-generating projects that align with the foundation’s mission.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SustainabilityPlan;
