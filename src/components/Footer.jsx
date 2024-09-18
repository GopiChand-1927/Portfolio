import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2024 Gopi Chand Bhukya. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>
              Follow me on:
              <a
                href="https://www.linkedin.com/in/gopi-chand-bhukya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white ms-2"
              >
                <FaLinkedin />
              </a>{" "}
              |
              <a
                href="https://github.com/GopiChand-1927"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white ms-2"
              >
                <FaGithub />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
