import React from 'react'
import { Modal as BootstrapModal } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Modal = (props) => ([
  <BootstrapModal
    key="modal"
    backdrop={ true }
    show={ props.show }
    onHide={ props.toggleModal }
  >
    <h2 style={{ padding:"100px 40px" }}>Sorry, not implemented!</h2>
  </BootstrapModal>,
  props.children
])


Modal.propTypes = {
  show: PropTypes.bool,
  toggleModal: PropTypes.func,
}

export default Modal
