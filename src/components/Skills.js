import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import { IoMdClose, IoMdArrowDropdown } from 'react-icons/io';

const Skills = ({
  skills,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="mt-3">
      <button type="button" className="link-btn text-light p-2" onClick={showModal}>
        Skills
        <IoMdArrowDropdown />
      </button>
      <Modal show={isOpen} onHide={hideModal} dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <Modal.Header>
          <Modal.Title>Skills</Modal.Title>
          <IoMdClose onClick={hideModal} />
        </Modal.Header>
        <Modal.Body>
          {
            skills.map((item) => (
              <li key={item}>{item}</li>
            ))
          }
        </Modal.Body>
      </Modal>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Skills;
