import React from 'react';
import { Container, Navbar, Nav, NavbarBrand, NavLink, NavbarToggle, NavbarCollapse } from 'react-bootstrap';

const Header = () => {
  return (
   
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top" >
        <Container>
          <NavbarBrand className='fs-5 fw-bold'>GOPI CHAND BHUKYA</NavbarBrand>
          <div className="ms-3 d-flex align-items-center">
          </div>
          <NavbarToggle />
          <NavbarCollapse>
            <Nav className="ms-auto">
              <NavLink href="#home" className="text-white hvr-underline-from-center">HOME</NavLink>
              <NavLink href="#about" className="text-white hvr-underline-from-center">ABOUT</NavLink>
              <NavLink href="#skills" className="text-white hvr-underline-from-center">SKILLS</NavLink>
              <NavLink href="#projects" className="text-white hvr-underline-from-center">PROJECTS</NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
  
  );
}

export default Header;
