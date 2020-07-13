import React from 'react';
import ProjectProps from './ProjectProps';

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
          projectName={<a href={npsVisitorLink}>Park Visitor Guide</a>}
          projectDescription="This app helps visitors find some historic parks in the states. It was built using NPS API."
          githubLink={<a href={npsVisitorGithub}>Details in GitHub</a>}
        />
        <ProjectProps
          image="../../images/employee-directory-ui-204x175.jpg"
          projectName={<a href={employeeDirectoryLink}>Employee Directory</a>}
          projectDescription="A React.js based employee directory app. It was built using a third-party API at Randomuser.me."
          githubLink={<a href={employeeDirectoryGithub}>Details in GitHub</a>}
        />
        <ProjectProps
          image="../../images/workout-tracker-ui-204x175.jpg"
          projectName={<a href={workoutTrackerLink}>Workout Tracker</a>}
          projectDescription="A workout tracker app: built using NodeJs, Express, MongoDB with Mongoose Schema."
          githubLink={<a href={workoutTrackerGithub}>Details in GitHub</a>}
        />
      </div>
    </>
  )
}
export default ProjectBottomRow;