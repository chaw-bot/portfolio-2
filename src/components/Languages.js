import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import { IoMdClose, IoMdArrowDropdown } from 'react-icons/io';

const Languages = ({ languages }) => {
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
        Languages
        <IoMdArrowDropdown />
      </button>
      <Modal show={isOpen} onHide={hideModal} dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <Modal.Header>
          <Modal.Title>Languages</Modal.Title>
          <IoMdClose onClick={hideModal} />
        </Modal.Header>
        <Modal.Body>
          {
            languages.map((item) => (
              <li key={item}>{item}</li>
            ))
          }
        </Modal.Body>
      </Modal>
    </div>
  );
};

Languages.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Languages;
