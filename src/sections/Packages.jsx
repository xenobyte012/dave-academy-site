import React from "react";

const pricingPlans = [
  {
    title: "Primary School",
    price: "R250",
    description: "Grade 1 to 7",
    features: [
      "All subjects covered",
      "CAPS aligned content",
      "Exam preparation",
      "Personalized attention",
    ],
  },

  {
    title: "Grade 8 - 11",
    description: "Monthly pricing",
    pricing: [
      "1 subject – R250",
      "2 subjects – R350",
      "3+ subjects – R450",
    ],
    features: [
      "Structured lessons",
      "Exam-focused learning",
      "Extra practice support",
    ],
  },

  {
    title: "Grade 12",
    description: "Monthly pricing",
    pricing: [
      "1 subject – R350",
      "2 subjects – R450",
      "3 subjects – R550",
      "4+ subjects – R650",
    ],
    features: [
      "Intensive exam prep",
      "Past papers & strategies",
      "High-performance support",
    ],
  },
];

export default function Pricing() {
  // Scroll to contact section (good UX)
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="pricing" className="bg-background-2 text-heading-2 py-12 px-6">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Pricing Plans
        </h2>
        <p className="text-sub-heading-2 max-w-2xl mx-auto">
          Flexible and affordable tutoring plans designed to help every student succeed.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg border bg-slate-800 border-slate-700 hover:scale-105 transition-transform"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>

            {/* Description */}
            <p className="text-sm mb-4 opacity-80">{plan.description}</p>

            {/* SINGLE PRICE (Primary only) */}
            {plan.price && (
              <div className="text-3xl font-bold mb-4">
                {plan.price}
                <span className="text-sm font-normal"> / month</span>
              </div>
            )}

            {/* MULTI PRICING (Grade 8–12) */}
            {plan.pricing && (
              <div className="mb-4 space-y-2">
                {plan.pricing.map((item, i) => (
                  <p
                    key={i}
                    className={`text-sm font-medium ${
                      item.includes("3+") || item.includes("4+")
                        ? "text-amber-400 font-semibold" // highlight best value
                        : ""
                    }`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}

            {/* Features */}
            <ul className="space-y-2 text-sm mb-6">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            {/* Button */}
            <button
              onClick={scrollToContact}
              className="w-full py-3 rounded-xl font-semibold bg-amber-500 text-black hover:bg-amber-400 transition"
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}