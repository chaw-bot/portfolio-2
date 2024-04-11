import React from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

const Skills = ({
  skills,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-3">
      <button type="button" className="link-btn text-light p-2" onClick={toggleDropdown}>
        Skills
        {' '}
        {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </button>
      {isOpen && (
        <ul className="dropdown-menu show">
          {skills.map((item) => (
            <li key={item} className="dropdown-item">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Skills;
