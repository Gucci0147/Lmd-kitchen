import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Header = () => {
  return (
  <div>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand> 
            <Link to="/" className="text-decoration-none text-success fw-bold">
                The LMD Kitchen
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link 
            to="/" 
            className="text-decoration-none text-success fw- light mx-3"
            >
                HOME
            </Link>
           <Link 
            to="/about" 
            className="text-decoration-none text-success fw- light mx-3"
            >
                ABOUT
            </Link>
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
};

export default Header;