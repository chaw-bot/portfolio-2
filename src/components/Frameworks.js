import React from 'react';
import PropTypes from 'prop-types';
import frameworksIcon from '../images/frameworks.png';

const Frameworks = ({ frameworks }) => (
  <div className="skillscard">
    <img src={frameworksIcon} alt="Framewors Icon" />
    <h4>Frameworks</h4>
    <ul>
      {frameworks.map((item) => (
        <li key={item} className="items">{item}</li>
      ))}
    </ul>
  </div>
);

Frameworks.propTypes = {
  frameworks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Frameworks;
