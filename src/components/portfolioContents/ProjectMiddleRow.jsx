import React from 'react';
import ProjectProps from './ProjectProps';
import './Projects.css';

const dayPlannerGithub = "https://github.com/ssh1sharma/Work-Day-Scheduler";
const weatherDashboardGithub = "https://github.com/ssh1sharma/Weather-Dashboard";
const passwordGeneratorGithub = "https://github.com/ssh1sharma/Password-Generator";
const dayPlannerLink = "https://ssh1sharma.github.io/Work-Day-Scheduler/";
const weatherDashboardLink = "https://ssh1sharma.github.io/Weather-Dashboard/";
const passwordGeneratorLink = "https://ssh1sharma.github.io/Password-Generator/";

const ProjectMiddleRow = () => {
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center text-center mx-auto">
        <ProjectProps
          image="../../images/workday-scheduler-ui-204x175.jpg"
          projectName={<a href={dayPlannerLink} target="_blank" rel="noopener noreferrer">Day Planner</a>}
          projectDescription="A Javascript and jQuery based app that helps create a daily schedule. Moment time and date object used."
          githubLink={<a href={dayPlannerGithub} target="_blank" rel="noopener noreferrer">Details in GitHub</a>}
        />
        <ProjectProps
          image="../../images/weather-dashboard-ui-204x175.jpg"
          projectName={<a href={weatherDashboardLink} target="_blank" rel="noopener noreferrer">Weather Dashboard</a>}
          projectDescription="This app helps to search a city weather. It displays current weather and 5-days forecast. It was built using a third-party API."
          githubLink={<a href={weatherDashboardGithub} target="_blank" rel="noopener noreferrer">Details in GitHub</a>}
        />
        <ProjectProps
          image="../../images/password-generator-ui-204x175.jpg"
          projectName={<a href={passwordGeneratorLink} target="_blank" rel="noopener noreferrer">Password Generator</a>}
          projectDescription="An html-validated password generator app. It randomly creates a password based on letters, numbers and special characters. "
          githubLink={<a href={passwordGeneratorGithub} target="_blank" rel="noopener noreferrer">Details in GitHub</a>}
        />
      </div>
    </>
  )
}
export default ProjectMiddleRow;