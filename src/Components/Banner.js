import React from 'react';
import {Button, Row, Container, Col} from 'react-bootstrap';

const Banner = () => {
  return (
    <section className="banner" id="home">
      <div>
        <Container>
            <Row className="align-items-center">
                <Col xs = {15} md = {6} xl = {7}>
                    <h1>Welcome to My Portfolio</h1>
                    <p>My name is Shashwat Srivastava and I am a freshman at the University of Pittsburgh pursuing a degree in Computer Science. I am enthusiastic about diving into the world of software development and engineering. This portfolio serves as a testament to my journey thus far and my aspirations for the future. I am eager to explore opportunities that allow me to gain hands-on experience, broaden my skill set, and contribute meaningfully to innovative projects in the field. I actively engage in projects driven by both personal curiosity and educational pursuits, alongside initiatives that benefit others within my community.</p>
                    <Button className="learn-more-button" href="#skills">Learn More</Button>
                </Col> 
                <Col xs = {12} md = {6} xl = {5}>
                </Col>
            </Row>
        </Container>
        </div>
    </section>
    
  );
};

export default Banner;
