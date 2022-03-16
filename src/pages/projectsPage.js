import React from 'react';
import PropTypes from 'prop-types';

const ProjectsPage = ({ projects }) => (
  <div className="projectsmain">
    <header>
      <h3>
        Here are some of the projects I&apos;ve created and collaborated on..
      </h3>
    </header>
    <section>
      {
          projects.map((project) => (
            <div key={project.name} className="projects">
              <div>
                <h1>{project.name}</h1>
                <img src={project.image} alt={project.name} className="images" />
              </div>
              <div>
                <p>{project.description}</p>
                <a href={project.live_demo}>
                  <input type="submit" value="Live Demo" />
                </a>
                <a href={project.source_code}>
                  <input type="submit" value="Source Code" />
                </a>
                <ul>
                  {
                    project.languages.map((language) => (
                      <li key={language}>{language}</li>
                    ))
                  }
                </ul>
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
