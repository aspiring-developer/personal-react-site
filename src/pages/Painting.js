import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import OilPaintingRow from '../components/paintingContents/OilPaintingRow';

const Painting = () => {
  return (
    <>
      <Header />
      <h3 className="text-danger text-center my-4">Oil Paintings and Chalkboard Arts</h3>
      <OilPaintingRow />
      <Footer />
    </>
  )
}
export default Painting;