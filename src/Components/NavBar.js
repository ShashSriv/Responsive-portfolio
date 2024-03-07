import React, { Component } from "react";
import { Nav, Navbar, Container} from "react-bootstrap";
import icon1 from '../Assets/Img/Icon1.svg'
import icon2 from '../Assets/Img/Icon2.svg';
import icon3 from '../Assets/Img/Icon3.svg';





export default class NavBar extends Component {

    render() {
        return (
            <Navbar bg="light" variant={"light"} expand="md" >
                <Container>
                    <Navbar.Brand href="#home" className="logo"><img src = {icon3} width={40} height={40}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <span className="navbar-text">
                            <Nav.Link className="link" href="#home">Home</Nav.Link>
                            <Nav.Link className="link" href="#skills">Skills</Nav.Link>
                            <Nav.Link className="link" href="#projects">Projects</Nav.Link>
                            </span>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://github.com/ShashSriv" target="_blank"><img src={icon1} width={40} height={40} alt="" /></a>
                            </div>
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/shashwat-srivastava-444334251/" target="_blank"><img src={icon2} width={40} height={40} alt="" /></a>
                            </div>
                            <Nav.Link href="#contact">
                                <button className="connect-button"><span className="connect-text">Let's Connect</span></button>
                            </Nav.Link>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}