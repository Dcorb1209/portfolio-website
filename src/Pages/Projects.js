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
                            <ProjectCard title="Dynamic Title 1"/>
                        </Col>
                        <Col>
                            <ProjectCard title="Dynamic Title 2"/>
                        </Col>
                        <Col>
                            <ProjectCard title="Dynamic Title 3"/>
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