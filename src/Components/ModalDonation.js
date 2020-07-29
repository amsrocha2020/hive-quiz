import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalDonation = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Donation to @portugalcoin
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p className="modal-thanks">Thank you very much for your support!</p>
        <p>Hug from Portugal<span role="img" aria-label="Flag Portugal">🇵🇹</span></p>
        <div className="text-center">
          <a className="btn btn-success mr-1 mb-1" href="https://hivesigner.com/sign/transfer?to=portugalcoin&amp;amount=5%20HIVE" target="_blank" rel="nofollow noopener noreferrer">5 HIVE</a>
          <a className="btn btn-success mr-1 mb-1" href="https://hivesigner.com/sign/transfer?to=portugalcoin&amp;amount=10%20HIVE" target="_blank" rel="nofollow noopener noreferrer">10 HIVE</a>
          <a className="btn btn-success mr-1 mb-1" href="https://hivesigner.com/sign/transfer?to=portugalcoin&amp;amount=50%20HIVE" target="_blank" rel="nofollow noopener noreferrer">50 HIVE</a>
          <a className="btn btn-success mr-1 mb-1" href="https://hivesigner.com/sign/transfer?to=portugalcoin&amp;amount=100%20HIVE" target="_blank" rel="nofollow noopener noreferrer">100 HIVE</a>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalDonation;