import React from "react";
import profileImage from "../images/profile-picture.jpg";
import star from "../images/star.webp";

const testimonials = [
  {
    name: "Temoso M. (Parent)",
    review:
      "My daughter went from dreading math to actually asking for extra problems. The tutors are patient and make learning fun.",
    date: "2 weeks ago",
  },
  {
    name: "Temoso L. (Grade 12)",
    review:
      "I finally understand physics. My marks improved from level 4 to level 7 in one term!",
    date: "1 month ago",
  },
  {
    name: "Boitumelo R. (Grade 11)",
    review:
      "The one-on-one attention made all the difference. I feel confident going into exams now.",
    date: "4 months ago",
  },
];

function Testimonials() {
  return (
    <section className="bg-slate-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from students and parents who’ve experienced our tutoring.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={profileImage}
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={star} alt="star" className="w-4 h-4" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;