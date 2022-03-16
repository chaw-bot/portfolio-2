import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import { IoMdClose, IoMdArrowDropdown } from 'react-icons/io';

const Frameworks = ({ frameworks }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" onClick={showModal}>
        Frameworks
        <IoMdArrowDropdown />
      </button>
      <Modal show={isOpen} onHide={hideModal} dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <Modal.Header>
          <Modal.Title>Frameworks</Modal.Title>
          <IoMdClose onClick={hideModal} />
        </Modal.Header>
        <Modal.Body>
          {
            frameworks.map((item) => (
              <li key={item}>{item}</li>
            ))
          }
        </Modal.Body>
      </Modal>
    </>
  );
};

Frameworks.propTypes = {
  frameworks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Frameworks;
