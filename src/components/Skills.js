import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdCloseCircle } from 'react-icons/io';

const Skills = ({
  items,
}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <input type="button" className="skills" value="Skills" onClick={handleClick} style={{ display: show ? 'none' : 'block' }} />
      <ul className="skills_options" style={{ display: show ? 'block' : 'none' }}>
        <h2>Skills</h2>
        <IoMdCloseCircle onClick={handleClick} />
        {
          items.map((item) => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
};

Skills.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Skills;
