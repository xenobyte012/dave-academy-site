import React from "react";
import ourGoalsImage from "../images/ct (2).jpg";

const values = [
  {
    title: "Excellence",
    icon: "📘",
    description: "We set high standards, then go beyond them.",
  },
  {
    title: "Integrity",
    icon: "🤝",
    description: "Honest communication, transparent pricing, no surprises.",
  },
  {
    title: "Growth",
    icon: "🚀",
    description: "We celebrate progress, not just perfection.",
  },
  {
    title: "Innovation",
    icon: "💡",
    description: "Modern methods, interactive tools, real engagement.",
  },
  {
    title: "Community",
    icon: "❤️",
    description: "A welcoming space where students and families belong.",
  },
];

function CoreValues() {
  return (
    <section
      id="about"
      className="bg-background-2 text-normal-text-2 py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
            Core Values
          </h1>
          <p className="text-lg text-gray-400">
            What Guides Us
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-slate-900 p-5 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-subheading-2 mb-2 flex items-center gap-2">
                  <span>{value.icon}</span>
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-6">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT: Image */}
          <div className="hidden lg:block">
            <img
              loading="lazy"
              src={ourGoalsImage}
              alt="Core values"
              className="rounded-2xl object-cover shadow-2xl w-full h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreValues;