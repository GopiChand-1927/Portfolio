import React from 'react';
import { Container, Navbar, Nav, NavbarBrand, NavLink, NavbarToggle, NavbarCollapse, Button } from 'react-bootstrap';
 
import resume from '../assets/images/Gopi_Chand_Bhukya_Resume.pdf'

const Header = () => {
  return (
   
      <Navbar  expand="lg" className="sticky-top darkbg" >
        <Container>
          <NavbarBrand className='fs-5 fw-bold text-white'>GOPI CHAND BHUKYA</NavbarBrand>
          <div className="ms-3 d-flex align-items-center">
          </div>
          <NavbarToggle />
          <NavbarCollapse>
            <Nav className="ms-auto">
              <NavLink href="#home" className="text-white hvr-underline-from-center">HOME</NavLink>
              <NavLink href="#about" className="text-white hvr-underline-from-center">ABOUT</NavLink>
              <NavLink href="#skills" className="text-white hvr-underline-from-center">SKILLS</NavLink>
              <NavLink href="#projects" className="text-white hvr-underline-from-center">PROJECTS</NavLink>
              <NavLink href={resume} target='_blank'><Button className='btn btn-success' style={{borderRadius:'20px',marginTop:'-5px'}}>Resume</Button></NavLink>
              
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
  
  );
}

export default Header;
