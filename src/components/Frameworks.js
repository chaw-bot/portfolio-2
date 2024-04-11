import React from 'react';
import PropTypes from 'prop-types';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

const Frameworks = ({ frameworks }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-3">
      <button type="button" className="link-btn text-light p-2" onClick={toggleDropdown}>
        Frameworks
        {' '}
        {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </button>
      {isOpen && (
        <ul className="dropdown-menu show">
          {frameworks.map((item) => (
            <li key={item} className="dropdown-item">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

Frameworks.propTypes = {
  frameworks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Frameworks;
