import React from "react";
import { CheckCircle } from "lucide-react"; // clean icons
const features = [
  {
    title: "Proven Results",
    description:
      "We’ve proudly maintained a 100% pass rate for the past 3 years, helping students achieve academic success with confidence.",
  },
  {
    title: "Inclusive Learning Environment",
    description:
      "We support every learner, ensuring lessons are clear, engaging, and suited to different learning styles.",
  },
  {
    title: "Experienced & Qualified Tutor",
    description:
      "Our tutor is highly trained with extensive experience, focused on delivering results and simplifying complex topics.",
  },
  {
    title: "Exam-Focused Preparation",
    description:
      "We prepare students specifically for exams using proven strategies, past papers, and targeted revision techniques.",
  },
  {
    title: "CAPS & ATP Aligned Content",
    description:
      "All lessons follow the official CAPS and Annual Teaching Plan (ATP), ensuring students stay aligned with school curriculum.",
  },
  {
    title: "Dedicated Time & Attention",
    description:
      "We allocate enough time per lesson to ensure full understanding — no rushing no confusion.",
  },
  {
    title: "Flexible Online Lessons",
    description:
      "We offer convenient online classes that fit your schedule, making learning accessible anytime, anywhere.",
  },
];
export default function WhyChooseUs() {
  return (
    <section className="bg-background-2 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
        {/* Subheading */}
        <p className="text-gray-300 max-w-2xl mx-auto">
          Helping students succeed with structured, high-quality tutoring that
          delivers real results.
        </p>
      </div>
      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105
                        transition-transform duration-300 border border-slate-700 "
          >
            {/* Icon <CheckCircle className="text-green-400 mb-4" size={28} />*/}
            <CheckCircle className="text-green-400 mb-4" size={28} />
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
