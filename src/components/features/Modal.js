import { Button, Modal } from 'react-bootstrap';

function Modal(props) {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>This operation will completely remove this post from the app. Are you sure you want to do that?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>
        Close
        </Button>
        <Button variant="danger">
        Remove
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default Modal;
