import React from 'react'
import HeroSection from '../sections/HeroSection';
import Navbar from '../components/Navbar';
import AboutUs from '../sections/AboutUs';
import Testimonials from "../sections/Testimonials";
import Subjects from '../sections/Subjects';
import Footer from '../components/Footer'
import ServiceSection from '../sections/ServiceSection';
import Version from '../sections/Version';
import CoreValues from '../sections/CoreValues'
import Packages from '../sections/Packages'
import ContactUs from '../sections/ContactUs';
import WhyChooseUs from '../sections/WhyChooseUs';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Version />
      <CoreValues />
      <ServiceSection />
      <Packages />
	<Subjects />
	<WhyChooseUs />
      <Testimonials />
      
      
      <ContactUs />
      <Footer />
    </div>
  );
}

