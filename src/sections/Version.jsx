import React from "react";
import ourGoalsImage from "../images/ct (2).jpg";

function Version() {
  return (
    <section className="bg-background-1 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-normal-text-1 mb-4">
            What Makes Our Service Different
          </h2>
          <p className="text-heading-1 max-w-2xl mx-auto">
            We focus on delivering quality education with purpose, structure, and real impact.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT: Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            {/* Vision */}
            <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl text-sub-heading-2 font-semibold mb-3">
                Vision
              </h3>
              <p className="text-normal-text-2 text-sm leading-relaxed">
                A world where every learner — regardless of background — has access
                to education that sparks curiosity and prepares them for life beyond
                the classroom.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl text-sub-heading-2 font-semibold mb-3">
                Mission
              </h3>
              <p className="text-normal-text-2 text-sm leading-relaxed">
                To deliver accessible, high-impact tutoring that builds academic
                mastery, critical thinking, and unstoppable confidence.
              </p>
            </div>

            {/* Goals (full width) */}
            <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition sm:col-span-2">
              <h3 className="text-xl text-sub-heading-2 font-semibold mb-3">
                Goals
              </h3>

              <div className="text-normal-text-2 text-sm space-y-2">
                <p>📘 Excellence – We set high standards, then go beyond them.</p>
                <p>🤝 Integrity – Honest communication, transparent pricing.</p>
                <p>🚀 Growth – We celebrate progress, not just perfection.</p>
                <p>💡 Innovation – Modern methods, interactive tools.</p>
                <p>❤️ Community – A space where students and families belong.</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="hidden lg:block">
            <img
              src={ourGoalsImage}
              alt="Our Goals"
              className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Version;