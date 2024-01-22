import { Modal } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export const ModalWindow = ({ isOpen, onClose, content }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Modal.Header />
      {content}
    </Modal>
  );
};
