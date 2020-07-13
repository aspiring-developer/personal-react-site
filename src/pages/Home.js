import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HomeTitleSection from '../components/homeContents/HomeTitleSection';
import HomeMidSection from '../components/homeContents/HomeMidSection';
import HomeBottomSection from '../components/homeContents/HomeBottomSection';


const Home = () => {
  return (
    <>
      <Header />
      <HomeTitleSection />
      <HomeMidSection />
      <HomeBottomSection />
      <Footer />

    </>
  )
}
export default Home;