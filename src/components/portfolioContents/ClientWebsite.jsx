import React from 'react';
import ClientWebsiteProps from './ClientWebsiteProps';
import './Projects.css';

const sushiWebsiteLink = "https://little-tokyo-sushi.herokuapp.com/";
const audiologyWebsiteLink = "http://henryandstewart.com/";

export const ClientWebsite = () => {
  return (
    <>
      <h4 class="text-center pb-2 text-info"> Some of our client's website: </h4>
      <div class="row webPageThumbRow">
        <ClientWebsiteProps
          websiteImage="../../images/audiology-web-screen-capture-150x150.jpg"
          imageAlt="Henry and Stewart Audiology web page screenshot"
          websiteName={<a href={audiologyWebsiteLink}>Henry & Stewart audiology </a>}
          websiteDescription="This website was built for one of my graphic design class friend's client. I used HTML5 and CSS3 to build it to have her design layout implemented as she expected."
        />
        <ClientWebsiteProps
          websiteImage="../../images/sushi-web-screen-capture-150x150.jpg"
          imageAlt="Sushi bar web page screenshot"
          websiteName={<a href={sushiWebsiteLink}>Little Tokyo Sushi</a>}
          websiteDescription="This is a simple HTML and CSS based website built for a client. I used Adobe Photoshop and Illustartor to make logo, banner and optimize images."
        />

      </div>
    </>
  )
}
