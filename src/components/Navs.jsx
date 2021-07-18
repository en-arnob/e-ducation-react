import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { BiBookReader } from "react-icons/bi";
import { LinkContainer } from "react-router-bootstrap";

const Navs = () => {
  return (
    <>
      <Navbar className='z-20' bg="green-500" variant="dark" expand="lg">
        <Navbar.Brand>
          {" "}
          <div className="flex">
            <h3 className="text-3xl text-yellow-200">
              <BiBookReader />
            </h3>
            <h3 className=" ml-2 font-bold text-2xl  md:text-yellow-200">
              {" "}
              Student Portal
            </h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>
                <h1 className="text-lg text-green-700">Dashboard</h1>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link>
                <h1 className="text-lg">Profile</h1>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/courses">
              <Nav.Link>
                <h1 className="text-lg">Courses</h1>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/results">
              <Nav.Link>
                <h1 className="text-lg">Results</h1>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/routine">
              <Nav.Link>
                <h1 className="text-lg">Routine</h1>
              </Nav.Link>
            </LinkContainer>
          </Nav>

          <Button variant="outline-light" size="sm">
            LOGIN
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navs;
