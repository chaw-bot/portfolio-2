import React from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

const Languages = ({ languages }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-3">
      <button type="button" className="skills-btn text-light p-2" onClick={toggleDropdown}>
        Languages
        {' '}
        {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </button>
      {isOpen && (
        <ul className="dropdown-menu show">
          {languages.map((item) => (
            <li key={item} className="dropdown-item">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

Languages.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Languages;
