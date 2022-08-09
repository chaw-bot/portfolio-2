import React from 'react';
import PropTypes from 'prop-types';

const ProjectsPage = ({ projects }) => (
  <div className="projectsmain p-3" id="projectsPage">
    <header>
      <h3 className="font-colour p-3 mt-3">
        Here are some of the projects I&apos;ve created and collaborated on..
      </h3>
    </header>
    <section className="projects-cont">
      {
          projects.map((project) => (
            <div key={project.name} className="card mt-3 p-3 projects">
              <div>
                <h5 className="">{project.name}</h5>
                <img src={project.image} alt={project.name} className="images" />
              </div>
              <div>
                <ul className="d-flex justify-content-evenly mt-3 lang">
                  {
                    project.languages.map((language) => (
                      <li key={language} className="p-2 h6">{language}</li>
                    ))
                  }
                </ul>
                <p className="mt-3">{project.description}</p>
                <div className="d-flex justify-content-evenly">
                  <a href={project.live_demo}>
                    <input type="submit" value="Live Demo" className="p-2 link-btn text-light" />
                  </a>
                  <a href={project.source_code}>
                    <input type="submit" value="Source Code" className="p-2 link-btn text-light" />
                  </a>
                </div>
              </div>
            </div>
          ))
        }
    </section>
  </div>
);

ProjectsPage.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectsPage;
