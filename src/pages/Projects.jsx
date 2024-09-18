import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaDatabase, FaReact, FaExternalLinkAlt } from 'react-icons/fa';
import { SiSpring, SiPostgresql } from 'react-icons/si';

const skillsIcons = {
  HTML: <FaHtml5 size="1.5em" className="skill-icon" />,
  CSS: <FaCss3Alt size="1.5em" className="skill-icon" />,
  JavaScript: <FaJs size="1.5em" className="skill-icon" />,
  React: <FaReact size="1.5em" className="skill-icon" />,
  Java: <FaJava size="1.5em" className="skill-icon" />,
  Spring: <SiSpring size="1.5em" className="skill-icon" />,
  SQL: <FaDatabase size="1.5em" className="skill-icon" />,
  PostgreSQL: <SiPostgresql size="1.5em" className="skill-icon" />
};

const projects = [
  { 
    id: 1, 
    title: 'Nehru Zoological Park', 
    description: 'Developed web services for mobile app integration, including ticket booking and donation services.', 
    company: 'Centre for Good Governance', 
    year: '2023 - Present', 
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Java', 'Spring'],
    url: 'https://nzptsfd.telangana.gov.in' 
  },
  { 
    id: 2, 
    title: 'Financial Management System', 
    description: 'Worked on GST reporting and budget management for the Telangana State Civil Supplies Corporation.', 
    company: 'Centre for Good Governance', // Added company
    year: '2021 - 2023', // Added year
    skills: ['HTML', 'CSS', 'JavaScript',  'Java',  'PostgreSQL'],
    url: 'https://tgcslfms.cgg.gov.in' 
  },
];

export const Projects = () => {
  return (
    <div className="projects-container " id="projects">
      <Container className='mt-5 text-start '>
        <h2
          className="heading"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >My Projects</h2>

        <Row className="justify-content-start">
          {projects.map(project => (
            <Col xs={12} md={6} lg={6} key={project.id} className="mt-5">
              <div className="project-item">
                <div className="project-header ">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt size="1.5em" className="link-icon" />
                  </a>
                </div>
                <div className="project-details">
                  <h4 className="project-title fs-3">{project.title}</h4>
                  <p className="fw-bold" style={{color:'#992f8c'}}>{project.company} | {project.year}</p> 
                  <p className="project-description text-secondary">{project.description}</p>
                </div>
                <div className="project-skills">
                  {project.skills.map(skill => skillsIcons[skill])}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
