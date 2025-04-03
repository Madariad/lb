
import React from 'react';
import Navbar from '../components/Navbar'

import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import FeaturesSection from '../components/FeaturesSection'
import CTASection from '../components/CTASection'
import CoursesSection from '../components/CoursesSection'

import Footer from '../components/Footer'



//Main page 
export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <CoursesSection />
      <CTASection />
      <Footer />
    </>
  );
}