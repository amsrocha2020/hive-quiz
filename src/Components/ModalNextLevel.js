import React from 'react';
import { Modal } from 'react-bootstrap';

import Congrats from '../logos/congrats.jpg';

const ModalNextLevel = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="modal-level"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className="text-center">
        <h1>LEVEL {props.level}</h1>
        <img className="img-congrats" src={Congrats} alt="Congrats Next Level" />
      </Modal.Body>
    </Modal>
  )
}

export default ModalNextLevel;