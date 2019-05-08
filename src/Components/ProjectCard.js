import React from 'react';
import {Card, Button} from 'react-bootstrap';

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Project Title</Card.Title>
                    <Card.Text>
                        Description
                    </Card.Text>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>;
            </div>
        );
    }
}

ProjectCard.propTypes = {

};

export default ProjectCard;