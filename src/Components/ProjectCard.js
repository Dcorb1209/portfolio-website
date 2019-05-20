import React from 'react';
import { Card, Button} from 'react-bootstrap';

import MyModal from './MyModal';
import './CSS/ProjectCard.css';

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { modalShow: false };
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        Short Project Description
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.setState({ modalShow: true })}>More Info</Button>
                </Card.Body>
            </Card>
            <MyModal projectTitle={this.props.title} show={this.state.modalShow} onHide={modalClose}></MyModal>
            </div>
        );
    }
}

ProjectCard.propTypes = {

};

export default ProjectCard;