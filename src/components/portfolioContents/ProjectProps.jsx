import React from 'react';

const ProjectProps = (props) => {
  return (
    <div className="uiThumbWrapper col-sm-12 col-md-4">
      <img src={props.image} alt="Project Screenshot" className="webProjectThumbBox" />
      <div className="col-sm-12 md-4 mt-2 px-3">
        <p className="appTitle">{props.projectName}</p>
        <p className="appText px-md-4">{props.projectDescription}</p>
        <p> <span className="appGitHubLink">{props.githubLink}</span></p>
      </div>
    </div>
  )
}
export default ProjectProps;