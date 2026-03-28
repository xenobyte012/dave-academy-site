import React from "react";

const subjects = [
  "Mathematics",
  "Mathematical Literacy",
  "Technical Mathematics",
  "Physical Science",
  "Technical Science",
  "Natural Science & Technology",
  "Social Science",
  "Accounting",
  "Business Studies",
  "English",
];

function Subjects() {
  return (
    <section className="bg-background-1 text-normal-text-1 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-sub-heading-1 mb-4">
            Subjects Offered
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide expert tutoring across a wide range of subjects to support every learner’s academic journey.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-gray-400">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-slate-900 p-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 text-center"
            >
              <h3 className="text-lg font-semibold text-heading-2">
                {subject}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Subjects;