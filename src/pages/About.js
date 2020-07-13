import React from 'react';
import AboutTitleSection from '../components/aboutContents/AboutTitleSection';
import AboutMainLeft from '../components/aboutContents/AboutMainLeft';
import AboutMainRight from '../components/aboutContents/AboutMainRight';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const About = () => {
  return (
    <>
      <Header />
      <AboutTitleSection />

      <div class="row aboutContentRow mx-auto text-center d-flex p-4">
        <AboutMainLeft />
        <AboutMainRight />
      </div>

      <Footer />
    </>
  )
}
export default About;