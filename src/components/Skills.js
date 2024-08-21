import React from 'react';
import PropTypes from 'prop-types';
import skillsIcon from '../images/skills.png';

const Skills = ({
  skills,
}) => (
  <div className="skillscard">
    <img src={skillsIcon} alt="Skills Icon" />
    <h4>Skills</h4>
    <ul>
      {skills.map((item) => (
        <li key={item} className="items">{item}</li>
      ))}
    </ul>
  </div>
);

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Skills;
