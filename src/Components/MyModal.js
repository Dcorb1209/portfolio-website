import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class MyModal extends Component {
    render() {
        return (
          <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Project Title
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Description</h4>
              <p>
                Longer description about project
              </p>
              <h4>Goals</h4>
              <p>
                Kewl stuff I learned during this project
              </p>
              <h4>Skills Learned</h4>
              <p>
                Talk about new stuff we learned
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
    }
}

export default MyModal;