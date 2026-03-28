import React from "react";
import contactImage from "../images/ct (1).jpg";
import emailjs from '@emailjs/browser';
function ContactUs() {
  const phoneNumber = "27765118408";
  const message = "Hello, I am interested in your tutoring services.";
  const encodedMessage = encodeURIComponent(message);

  return (
    <section id="contact" className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to improve your results? Get in touch with us today.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-w-100">

          {/* LEFT: Form */}
          <form className="bg-slate-800 p-8 rounded-2xl shadow-lg space-y-4">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full p-3 rounded-lg bg-slate-900 text-white outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="w-full p-3 rounded-lg bg-slate-900 text-white outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                rows="8"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg bg-slate-900 text-white outline-none"
              ></textarea>
            </div>

            <button className="w-full bg-amber-600 py-3 rounded-xl hover:bg-amber-700 transition">
              Send Message
            </button>
          </form>

          {/* RIGHT: Contact Info */}
          <div className="space-y-6 text-left">

            <div>
              <h3 className="font-semibold text-lg">📞 Call Us</h3>
              <p className="text-gray-400">064 182 2578</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">📧 Email</h3>
              <p className="text-gray-400">stdaveacademy@gmail.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">💬 WhatsApp</h3>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-green-500 px-6 py-3 rounded-xl hover:bg-green-600 transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Image */}
        <a
 href="https://maps.google.com"
        
           target="_blank"
 
           rel="noopener noreferrer"
        
           className="block mt-8"
>

           <div className="overflow-hidden rounded-xl shadow-lg">

          
     <iframe
  			src="https://www.google.com/maps?q=18799+Boitekong+Ext+8,+Rustenburg,+South+Africa&z=15&output=embed"
  			className="w-full h-[285px] md:h-[350px] rounded-2xl shadow-xl object-cover"
  			loading="lazy"
  			title="Dave Academy Location - Boitekong Ext 8"
  			allowFullScreen=""
  			referrerPolicy="no-referrer-when-downgrade"
		></iframe>     
           </div>
      
        </a>

 
          {/*
            <div>
              <img
                src={contactImage}
                alt="contact"
                className="rounded-2xl shadow-xl w-full h-[285px] object-cover"
              />
            </div>
          */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;