import React from 'react';
import './Projects.css';

const ClientWebsiteProps = (props) => {
  return (
    <>
      <div class="col-12 col-md-5 websiteColumn text-center py-4 px-3 d-flex justify-content-center align-items-center">
        <div class="col">
          <img src={props.websiteImage} alt={props.imageAlt} className="websiteThumbBox" />
          <div className="col-sm-12 md-4 mt-2 px-3">
            <p className="projectTitle">{props.websiteName}</p>
            <p className="projectText px-md-4">{props.websiteDescription}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default ClientWebsiteProps;