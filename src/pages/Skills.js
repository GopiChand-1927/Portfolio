import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaDatabase, FaReact } from 'react-icons/fa';
import { SiSpring, SiPostgresql } from 'react-icons/si';

const frontendSkills = [
  { id: 1, name: 'HTML', icon: <FaHtml5 size="2.5em" className="html-icon" /> },
  { id: 2, name: 'CSS', icon: <FaCss3Alt size="2.5em" className="css-icon" /> },
  { id: 3, name: 'JavaScript', icon: <FaJs size="2.5em" className="js-icon" /> },
  { id: 4, name: 'React', icon: <FaReact size="2.5em" className="react-icon" /> },
];

const backendSkills = [
  { id: 1, name: 'Java', icon: <FaJava size="2.5em" className="java-icon" /> },
  { id: 2, name: 'Spring Boot', icon: <SiSpring size="2.5em" className="spring-icon" /> },
  { id: 3, name: 'SQL', icon: <FaDatabase size="2.5em" className="sql-icon" /> },
  { id: 4, name: 'PostgreSQL', icon: <SiPostgresql size="2.5em" className="postgresql-icon" /> },
];

export const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <Container className='mt-5 text-start'>
        <h2
          className="heading"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          style={{ color: 'white' }}>My Skills</h2>

        <div className="skills-category" data-aos="fade-up">
          <h3 className="skills-subheading">Frontend</h3>
          <Row className="justify-content-center">
            {frontendSkills.map(skill => (
              <Col xs={6} md={4} lg={3} key={skill.id} className="d-flex justify-content-center mb-4">
                <div className="skill-item" data-aos="zoom-in" data-aos-delay={`${skill.id * 100}`}>
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="skills-category" data-aos="fade-up">
          <h3 className="skills-subheading">Backend</h3>
          <Row className="justify-content-center">
            {backendSkills.map(skill => (
              <Col xs={6} md={4} lg={3} key={skill.id} className="d-flex justify-content-center mb-4">
                <div className="skill-item" data-aos="zoom-in" data-aos-delay={`${skill.id * 100}`}>
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
