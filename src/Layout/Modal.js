import React from "react";
import { Modal as BootstrapModal } from "react-bootstrap";

// ❌ this file is not relevant for this exercise

const Modal = (props) => (
  <div>
    <BootstrapModal
      key="modal"
      backdrop={true}
      show={props.show}
      onHide={props.toggleModal}
    >
      <h2 style={{ padding: "100px 40px" }}>Sorry, not implemented!</h2>
    </BootstrapModal>
    {props.children}
  </div>
);

export default Modal;
