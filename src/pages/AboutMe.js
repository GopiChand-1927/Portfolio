import React from "react";
import profileImage from "../assets/images/profile_pic.jpeg";
import { Col, Container, Row } from "react-bootstrap";

export const AboutMe = () => {
  return (
    <div className="about" id="about" >
      <Container className="mt-5">
        <h2
          className="heading"
          data-aos="flip-down"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          About Me
        </h2>
        <Row>
          <Col md={8}>
            <p
              className="fs-5"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-out-sine"
            >
              Hello! I'm Bhukya Gopi Chand, a full stack software developer with
              3 years of experience in Java and PostgreSQL. I specialize in
              creating and maintaining web applications using Java, JavaScript,
              and frameworks like Spring Boot and Struts. I've worked on
              projects such as the Nehru Zoological Park mobile app, developing
              RESTful web services for ticket bookings and donations.
            </p>
            <p
              className="fs-5"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              My expertise includes integrating payment gateways, optimizing SQL
              queries, and managing CI/CD pipelines. I am dedicated to solving
              complex problems and continuously improving my skills.
            </p>
          </Col>
          <Col md={4} className="profilepic">
            <img
              src={profileImage}
              alt="Profile"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
