import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdCloseCircle } from 'react-icons/io';

const Languages = ({
  items,
}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <input type="button" className="languages" value="Languages" onClick={handleClick} style={{ display: show ? 'none' : 'block' }} />
      <ul className="language_options" style={{ display: show ? 'block' : 'none' }}>
        <h2>Languages</h2>
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

Languages.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Languages;
