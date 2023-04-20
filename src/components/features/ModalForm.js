import { Button, Modal } from 'react-bootstrap';

const ModalForm = (props) => {
  <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    ></Modal>
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
  };

export default ModalForm;
