import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectsPage = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const openLink = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="projectsmain p-3" id="projectsPage">
      <header>
        <h3 className="font-colour p-3 mt-3">
          Here are some of the projects I&apos;ve created and collaborated on..
        </h3>
      </header>
      <section className="projects-cont">
        <button type="button" onClick={prevPage} disabled={currentPage === 1} className="arrows">
          &#8592;
        </button>
        {currentProjects.map((project) => (
          <div key={project.name} className="card mt-3 p-3 projects">
            <div>
              <h5>{project.name}</h5>
              <img src={project.image} alt={project.name} className="images" />
              <ul className="d-flex justify-content-evenly mt-3 lang">
                {project.languages.map((language) => (
                  <li key={language} className="p-2 h6">{language}</li>
                ))}
              </ul>
              <p className="mt-3">{project.description}</p>
            </div>
            <div>
              <div className="d-flex justify-content-evenly">
                <button type="button" className="m-2 link-btn" aria-label="Live Demo for {project.name}" onClick={() => openLink(project.live_demo)}>
                  Live Demo
                </button>
                <button type="button" className="m-2 link-btn-2" aria-label="Source Code for {project.name}" onClick={() => openLink(project.source_code)}>
                  Source Code
                </button>

              </div>
            </div>
          </div>
        ))}
        <button type="button" onClick={nextPage} disabled={currentPage === totalPages} className="arrows">
          &#8594;
        </button>
      </section>
    </div>
  );
};

ProjectsPage.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    live_demo: PropTypes.string,
    source_code: PropTypes.string,
  })).isRequired,
};

export default ProjectsPage;
