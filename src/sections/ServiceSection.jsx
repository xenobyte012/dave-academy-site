import React from "react";
import ourGoalsImage from "../images/ct (2).jpg";

const services = [
  {
    title: "Primary School Tutoring",
    
    description:
      "Build strong foundations in literacy, numeracy, and study skills.",
  },
  {
    title: "High School Tutoring",
    
    description:
      "Subject-specific support for exams, essays, and advanced topics.",
  },
  {
    title: "Exam Preparation",
    
    description:
      "Final exams and test strategies that actually improve results.",
  },
  {
    title: "Homework Assistance",
    icon: "✍️",
    description:
      "Stress-free help to reinforce daily learning.",
  },
  {
    title: "One-on-One Sessions",
    
    description:
      "Tailored pace with full attention on the student.",
  },
  {
    title: "Group Classes",
    
    description:
      "Collaborative learning that builds confidence and engagement.",
  },
];

function ServiceSection() {
  return (
    <section
      id="services"
      className="bg-background-1 text-normal-text-1 py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-sub-heading-1 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tutoring programs designed to deliver real academic results and long-term confidence.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Image */}
          <div className="hidden lg:block">
            <img
              loading="lazy"
              src={ourGoalsImage}
              alt="Tutoring services"
              className="rounded-2xl object-cover shadow-2xl w-full h-[420px]"
            />
          </div>

          {/* RIGHT: Services */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 p-5 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-gray-200 mb-2 flex items-center ">
                 
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center mt-12">
          <p className="text-gray-400 max-w-xl mx-auto">
            Every program adapts to your child’s learning style — no one-size-fits-all approach.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;