import React from 'react';
import Header from '../components/header/Header';
import ProjectTopRow from '../components/portfolioContents/ProjectTopRow';
import ProjectMiddleRow from '../components/portfolioContents/ProjectMiddleRow';
import ProjectBottomRow from '../components/portfolioContents/ProjectBottomRow';
import { ClientWebsite } from '../components/portfolioContents/ClientWebsite';
import Footer from '../components/footer/Footer';

const WebDevelopment = (props) => {
  return (
    <>
      <Header />
      <h3 className="text-danger text-center my-4"> Web Development Portfolio
 </h3>
      <hr />
      <ProjectTopRow />
      <hr />
      <ProjectMiddleRow />
      <hr />
      <ProjectBottomRow />
      <hr />
      <ClientWebsite />
      <Footer />

    </>
  )
}
export default WebDevelopment;