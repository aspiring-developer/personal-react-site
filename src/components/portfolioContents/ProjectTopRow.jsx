import React from 'react';
import ProjectProps from './ProjectProps';
import './Projects.css';

const burger1Github = "https://github.com/ssh1sharma/Burger-1";
const jobSearchGithub = "https://github.com/ssh1sharma/Job-and-News-Search";
const burger2Github = "https://github.com/ssh1sharma/Burger-2";
const burger1Link = "https://burger-app-sh.herokuapp.com/";
const jobSearchLink = "https://richardkessler.github.io/Job-and-News-Search/";
const burger2Link = "https://sequelize-burger-app-sh.herokuapp.com/";

const ProjectTopRow = () => {
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center text-center mx-auto">
        <ProjectProps
          image="../../images/burger-mysql-ui-204x175.jpg"
          projectName={<a href={burger1Link}>Burger App-1</a>}
          projectDescription="A MySQL app that lets users virtually create, view, edit, save and delete their favorite burgers."
          githubLink={<a href={burger1Github}>Details in GitHub</a>}
        />
        <ProjectProps
          image="../../images/job-news-search-api-ui-204x175.jpg"
          projectName={<a href={jobSearchLink}>Job & Article Search</a>}
          projectDescription="An app that helps web-dev related job and article search. It was built using two third-party APIs."
          githubLink={<a href={jobSearchGithub}>Details in GitHub</a>}
        />
        <ProjectProps
          image="../../images/burger-sequelize-ui-204x175.jpg"
          projectName={<a href={burger2Link}>Burger App-2</a>}
          projectDescription="A Sequelize app that functions like the Burger-1, but it was built using ORM technology."
          githubLink={<a href={burger2Github}>Details in GitHub</a>}
        />
      </div>
    </>
  )
}
export default ProjectTopRow;