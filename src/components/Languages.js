import React from 'react';
import PropTypes from 'prop-types';
import languageIcon from '../images/languages.png';

const Languages = ({ languages }) => (
  <div className="skillscard">
    <img src={languageIcon} alt="Languages Icon" className="languages-icon" />
    <h4>Languages</h4>
    <ul>
      {languages.map((item) => (
        <li key={item} className="items">{item}</li>
      ))}
    </ul>
  </div>
);

Languages.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Languages;
