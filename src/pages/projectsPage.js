import React from 'react';
import PropTypes from 'prop-types';
import { FaLink } from 'react-icons/fa';

const ProjectsPage = ({ projects }) => {
  const openLink = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="projectsmain" id="projectsPage">
      <header>
        <h2 className="font-colour">My Projects</h2>
      </header>
      <p className="sub">
        Here are some of the projects I&apos;ve designed and built—blending creativity, code,
        and user-centered thinking to craft seamless digital experiences.
      </p>
      <section className="projects-cont">
        {projects.map((project) => (
          <div key={project.name} className="mt-3 projects">
            <div className="image-container">
              <img src={project.image} alt={project.name} className="images" />
              <div className="overlay">
                <div className="overlay-text">
                  <h5>{project.name}</h5>
                  <ul className="d-flex lang">
                    {project.languages.map((language) => (
                      <li key={language}>{language}</li>
                    ))}
                  </ul>
                  <p>{project.description}</p>
                  <button type="button" className="proj-link" aria-label="Live Demo for {project.name}" onClick={() => openLink(project.live_demo)}>
                    <FaLink color="#381B46" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
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
