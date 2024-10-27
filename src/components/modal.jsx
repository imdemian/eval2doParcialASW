/* eslint-disable react/prop-types */

import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ModalSpace = ({ show, setShow, children, size, title }) => {
  if (!show) {
    return null;
  }

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
      centered
      size={size || "md"}
    >
      <ModalHeader className="d-flex justify-content-between align-items-center">
        <Modal.Title>{title}</Modal.Title>
        <FontAwesomeIcon
          title="cerrar"
          onClick={() => setShow(false)}
          icon={faTimesCircle}
          style={{ cursor: "pointer" }}
        ></FontAwesomeIcon>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};

export default ModalSpace;
