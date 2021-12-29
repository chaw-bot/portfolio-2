import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdCloseCircle } from 'react-icons/io';

const Frameworks = ({
  items,
}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <input type="button" className="frameworks" value="Frameworks" onClick={handleClick} style={{ display: show ? 'none' : 'block' }} />
      <ul className="frameworks_options" style={{ display: show ? 'block' : 'none' }}>
        <h2>Frameworks</h2>
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

Frameworks.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Frameworks;
