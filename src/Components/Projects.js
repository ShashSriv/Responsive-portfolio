import React from 'react';
import { Row, Col } from 'react-bootstrap';
import inventory from '../Assets//Assets/Southwestern.jpg';
import pandas from '../Assets//Assets/Pandas.jpg';
import portfolio from '../Assets//Assets/Portfolio.jpg';  
import beerpong from '../Assets//Assets/BeerPong.jpg';



const Projects = () => {
  // Array of projects
  const projects = [
    { id: 1, title: 'Beer Pong Analysis', description: 'In progress project: Sideview shot predictor for Beer pong. Using OpenCV to color track pong ball and calculate predicted velocity path using projectile motion equations. Implementing latest YOLOv11 Object detection Model for red cup recognition and extracting values to detect whether ball is in goal. Current step: Train the YOLO model for higher accuracy in recognizing Red Solo Cups', link: 'https://github.com/ShashSriv/BeerPongAnalysis', image: beerpong},
    { id: 2, title: 'Southwestern Inventory System', description: 'Finished fullstack inventory management fullstack application created for Southwestern Veterans center in Pittsburgh, PA. Contains real time firestore database updates, restricted login features, and barcode generation. Created using React, Node.js, Google Firestore ', link: 'https://www.youtube.com/watch?v=9A0uSbtWGS4', image: inventory},
    { id: 3, title: 'Pandas Database Project', description: 'Using public databases from the City of Pittsburgh to measure the best neighborhood in the city based on a self selected metric. Made a Jupyter notebook  using Python language with pandas and matplotlib utilization to analyze data regarding parks around Pittsburgh', link: 'https://github.com/ShashSriv/Best-Neighborhood-Pittsburgh', image: pandas},
    { id: 4, title: 'Responsive React.js Portfolio', description: 'First experience with Node.js and React.js. Learned many aspects of bootstrapping and CSS styling to provide aesthetic components to web pages. Planning code to be easily maintained and updated with future experiences', link: 'https://github.com/ShashSriv/Responsive-portfolio?tab=readme-ov-file' , image: portfolio}
    //Input additional projects here
  ];

  return (
    <section id="projects" className="projects-grid">   
        {projects.map((project) => (
          <Row key={project.id}>
            <Col>
              <div className="project-card" style={{backgroundImage: `url(${project.image})`, backgroundSize: 'cover'}}>
                <h3 className="project-info">{project.title}</h3>
                <a href={project.link} target="_blank" ><button className="project-button">Project Link</button></a>
              </div>
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </Col>
          </Row>
        ))}      
    </section>
  );
};

export default Projects;
