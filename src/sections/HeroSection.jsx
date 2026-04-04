import React from 'react'
//import heroImage from '../images/logo.jpeg'
import heroImage from '../images/hero-img.jpg'

function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    })
  }
  return (
    <section
      id="home"
      className=" relative t-14 bg-gradient-to-r from-blue-800 to-slate-800 flex flex-col text-white  "
    >
      <div className="block md:hidden  ">
        <img
          loading="lazy"
          src={heroImage}
          alt="hero image"
          className="w-full  object-cover h-180"
        />
        <div className="absolute top-35 h-full left-10 w-8/10 flex flex-col justify-left ">
          <div className="text-5xl text-white font-bold leading-tight">
            Unlock Your Academic Pontential
          </div>
          <div className=" text-gray-100 text-xl font-medium leading-relaxed pt-5">
            Affordable, high‑quality tutoring that builds confidence, sharpens
            skills, and turns “I can’t”
          </div>
        </div>
        <div>
          <div className="absolute bottom-10  w-full flex justify-center ">
            <button
              onClick={scrollToContact}
              className="bg-amber-600 rounded-4xl py-4 px-12 text-xl "
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block top-14 pt-15">
        <img
          src={heroImage}
          alt="hero image"
          className="w-full  object-cover h-170"
        />
        <div className="absolute top-50 h-full left-10 w-1/2 flex flex-col justify-left ">
          <div className="text-6xl text-white font-bold leading-tight">
            Unlock Your Academic Pontential
          </div>
          <div className=" text-sub-heading-2 text-xl font-medium leading-relaxed pt-5">
            Affordable, high‑quality tutoring that builds confidence, sharpens
            skills, and turns “I can’t” into “I did.”
          </div>
        </div>
        <div>
          <div className="absolute bottom-10 l w-full flex justify-center ">
            
            <button
              onClick={scrollToContact}
              className="bg-amber-500  rounded-4xl py-4 px-12 text-xl hover:bg-amber-600"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection