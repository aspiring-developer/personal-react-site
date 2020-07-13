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
      <h1 className="text-center text-info text-capitalize mt-2 mb-4 pageTitle"> Web Development Portfolio
 </h1>
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