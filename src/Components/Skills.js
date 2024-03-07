import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Python from '../Assets/Img/Python.png';
import Java from '../Assets/Img/Java.png';
import MySql from '../Assets/Img/MySql.png';
import ReactImage from '../Assets/Img/React.png';
   

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }

    return (
        <section className='skills' id='skills'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <Carousel responsive={responsive} infinite = {true} data-bs-theme = "dark">
                            <Carousel.Item responsive = {responsive}>
                                <img className="carousel-image1" id="1" src = {Python}></img>
                                <Carousel.Caption>      
                                    <p id="caption">Worked on basic graphics and OOP structures, as well as Pandas and MatplotLib libraries for data analysis</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item responsive = {responsive}>
                                <img className="carousel-image2"src = {Java} alt = "First Slide"></img>
                                <Carousel.Caption>      
                                    <p id="caption">Well versed in OOP structure as well as basic Java FXML and GUI creation</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img className="carousel-image3" src = {MySql} alt = "First Slide"></img>
                                <Carousel.Caption> 
                                    <p id="caption">
                                    Creating and maintaining basic databases
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img className="carousel-image4" src = {ReactImage} alt = "First Slide"></img>
                                <Carousel.Caption>
                                    <p id="caption">
                                    Implementing React in static websites as well as integrating with Google Firebase capabilities

                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                        <h1>Skills</h1>
                        <p>Some of my most used and favorite tools. Throughout my programming journey I have gained experience utilizing these tools . I have also learned how to handle tools like Google Firebase authentication, and database management.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
