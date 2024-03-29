import React from 'react';
import SocialIcons from '../socialIcons/SocialIcons';
import './About.css';

const AboutMainRight = () => {
  return (
    <>
      <div class="col-sm-12 col-md-6 aboutContactCol">
        <img src="../images/shiva-1.png" alt="Shiva Sharma's profile" class="shivaImage" />
        <h6> Hi, I am Shiva Sharma. </h6>
        <p class="aboutPara text-info"> I am a Web Developer, UI/UX and Graphic Designer. <br /> </p>
        <p class="aboutPara text-info"> I have some experience in Marketing, Management, and Customer Service.
           </p>
        <hr class="contactHr" />
        <p class="aboutPara text-info"> Contact for further inquiry!</p>
        <p class="aboutPara"> Cary • North Carolina &bull; 919-793-4494 &bull; shivash05@gmail.com </p>
        <SocialIcons />

      </div>
    </>
  )
}
export default AboutMainRight;