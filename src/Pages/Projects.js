import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../Components/NavigationBar';
import ProjectCard from '../Components/ProjectCard';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <NavigationBar/>
                <Container>
                    <Row>
                        <Col>
                            <ProjectCard/>
                        </Col>
                        <Col>
                            <ProjectCard/>
                        </Col>
                        <Col>
                            <ProjectCard/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

Projects.propTypes = {

};

export default Projects;