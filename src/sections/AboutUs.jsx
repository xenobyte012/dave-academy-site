import React from "react";
import ourGoalsImage from "../images/ct (2).jpg";

function AboutUs() {
  return (
    <section id="about" className="bg-slate-900 text-normal-text-2 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-heading-2 mb-4">
            About Us
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-400">
            We don’t just teach — we build confidence, clarity, and real academic growth.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Text */}
          <div className="text-left max-w-xl mx-auto lg:mx-0">
            <h2 className="text-2xl font-semibold mb-6 text-subheading-2">
              We Don’t Just Tutor. We Transform
            </h2>

            {/* Mobile Image */}
            <div className="block lg:hidden mb-6">
              <img
                loading="lazy"
                src={ourGoalsImage}
                alt="Students learning"
                className="rounded-2xl object-cover shadow-xl w-full h-[250px]"
              />
            </div>

            <p className="mb-4 leading-relaxed text-gray-300">
              At <span className="font-semibold text-white">St Dave Academy</span>, 
              we replace frustration with clarity. Our structured one-on-one and 
              small-group sessions are designed to help learners improve their 
              grades while rediscovering the joy of learning.
            </p>

            <p className="leading-relaxed text-gray-300">
              We believe every student has untapped potential — our role is to 
              provide the tools, confidence, and support needed to unlock it.
            </p>
          </div>

          {/* RIGHT: Image */}
          <div className="hidden lg:block">
            <img
              loading="lazy"
              src={ourGoalsImage}
              alt="Students learning"
              className="rounded-2xl object-cover shadow-2xl w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;