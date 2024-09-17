import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import developerGif from '../assets/images/devguy3.gif';

import { Typewriter } from 'react-simple-typewriter';

const Information = () => {
    return (
        <div className="informationbg" id="home">
            <Container >
            <Row className="align-items-start text-white">
                <Col xs={12} md={8} className="d-flex flex-column align-items-md-start">
                    <p className='mt-5'>Hello, I'm</p>
                    <h1 data-aos="fade-up" data-aos-duration="1000">Gopi Chand Bhukya</h1>
                    <h3 className='mt-2'>
                        <Typewriter
                            words={['Full Stack Developer']}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h3>
                    <h3 data-aos="fade-up" data-aos-duration="1000" className='mt-2'>3 Years of Experience</h3>
                    <Button className='btn btn-success text-white mt-3'>Contact</Button>
                    <div className="d-flex mt-3">
                        <a 
                            href="https://wa.me/7036830616" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="icon-wrapper whatsapp-icon me-3"
                        >
                            <FaWhatsapp size={30} />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/gopi-chand-bhukya/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="icon-wrapper linkedin-icon me-3"
                        >
                            <FaLinkedin size={30} />
                        </a>
                        <a 
                            href="https://github.com/GopiChand-1927" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="icon-wrapper github-icon"
                        >
                            <FaGithub size={30} />
                        </a>
                    </div>
                </Col>
                
                <Col xs={12} md={4} className="d-flex mb-2 mt-5 justify-content-md-end">
                    <img 
                        src={developerGif} 
                        alt="developer gif" 
                        className="developer-gif" 
                    />
                </Col>
            </Row></Container>
            </div>
       
    );
}

export default Information;
