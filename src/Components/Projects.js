import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Projects = () => {
  // Array of projects
  const projects = [
    { id: 1, title: 'Southwestern Inventory System', description: 'In progress project creating a zero-cost inventory management application for local veterans centers using React and bootstrap for simple and accessible applications. Communicating with clients to assure application suits their specific needs. Learning to use tools like Firebase authentication and Firestore. Implementing barcode generation for different inventory items', link: 'https://github.com/zaf22/canteen-inventory', image: '/Southwestern.jpg'},
    { id: 2, title: 'Pandas Database Project', description: 'Using public databases from the City of Pittsburgh to measure the best neighborhood in the city based on a self selected metric. Made a Jupyter notebook  using Python language with pandas and matplotlib utilization to analyze data regarding parks around Pittsburgh', link: 'https://github.com/ShashSriv/Best-Neighborhood-Pittsburgh', image: '/Pandas.jpg'},
    { id: 3, title: 'Responsive React.js Portfolio', description: 'First experience with Node.js and React.js. Learned many aspects of bootstrapping and CSS styling to provide aesthetic components to web pages. Planning code to be easily maintained and updated with future experiences', link: 'https://github.com/ShashSriv/Responsive-portfolio?tab=readme-ov-file' , image: '/Portfolio.jpg'}
    //Input additional projects here
  ];

  return (
    <section id="projects" className="projects-grid">   
        {projects.map((project) => (
          <Row key={project.id}>
            <Col>
              <div className="project-card" style={{backgroundImage: `url(${project.image})`, backgroundSize: 'cover'}}>
                <h3 className="project-info">{project.title}</h3>
                <a href={project.link} target="_blank" ><button className="project-button">Github</button></a>
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
