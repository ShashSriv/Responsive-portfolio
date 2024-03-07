import React from 'react';
import { Container, Row } from 'react-bootstrap';

const ProjectsHeading = () => {
    return (
        <section className="project-heading-div" id="projects">
            <div className="project-heading">
                <Container>
                    <Row className="align-items-center">
                            <h1>My Projects</h1>
                            <p>Here are some of my recent projects. Hover over them for some more information and a link to its respective github repository</p>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default ProjectsHeading;
