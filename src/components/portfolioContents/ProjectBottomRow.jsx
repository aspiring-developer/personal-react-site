import React from 'react';
import ProjectProps from './ProjectProps';
import './Projects.css';

const npsVisitorGithub = "https://github.com/ssh1sharma/Park-Search-and-Blog";
const employeeDirectoryGithub = "https://github.com/ssh1sharma/React-Employee-Directory";
const workoutTrackerGithub = "https://github.com/ssh1sharma/Workout-Tracker";
const npsVisitorLink = "http://parks-and-weather.herokuapp.com/login_new.html";
const employeeDirectoryLink = "https://employee-directory-react-sh.herokuapp.com/";
const workoutTrackerLink = "https://workout-tracker-sh.herokuapp.com/";

const ProjectBottomRow = () => {
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center text-center mx-auto">
        <ProjectProps
          image="../../images/nps-visitor-api-ui-204x175.jpg"
          projectName={<a href={npsVisitorLink} target="_blank" rel="noopener noreferrer">Park Visitor Guide</a>}
          projectDescription="This app helps visitors find some historic parks in the states. It was built using NPS API."
          githubLink={<a href={npsVisitorGithub} target="_blank" rel="noopener noreferrer">Details in GitHub</a>}
        />
        <ProjectProps
          image="../../images/employee-directory-ui-204x175.jpg"
          projectName={<a href={employeeDirectoryLink} target="_blank" rel="noopener noreferrer">Employee Directory</a>}
          projectDescription="A React.js based employee directory app. It was built using a third-party API at Randomuser.me."
          githubLink={<a href={employeeDirectoryGithub} target="_blank" rel="noopener noreferrer">Details in GitHub</a>}
        />
        <ProjectProps
          image="../../images/workout-tracker-ui-204x175.jpg"
          projectName={<a href={workoutTrackerLink} target="_blank" rel="noopener noreferrer">Workout Tracker</a>}
          projectDescription="A workout tracker app: built using NodeJs, Express, MongoDB with Mongoose Schema."
          githubLink={<a href={workoutTrackerGithub} target="_blank" rel="noopener noreferrer">Details in GitHub</a>}
        />
      </div>
    </>
  )
}
export default ProjectBottomRow;