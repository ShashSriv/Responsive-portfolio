import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Contact = () => {
    const phoneNumber = '484-986-5391';
    const email = "shashwat.avin@gmail.com"
    return (
        <section id="contact" className="contact-banner">
            <Row className="align-items-center">
                <Col className="contact-heading">
                    <h1>Lets Connect!</h1>
                    <p>Feel free to reach out at anytime!</p>
                </Col>
                <Col className="contact-info">
                    <div className = "contact-bubble">
                        <h1>How to reach me</h1>
                        <p>Phone: {phoneNumber}</p>
                        <p>Email: {email}</p>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Contact;
