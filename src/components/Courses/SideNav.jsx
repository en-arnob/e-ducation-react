import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {
    FaBookOpen,
    FaCode,
    FaComment,
    FaEnvelope,
    FaFolder,
    FaHome,
    FaPowerOff
} from "react-icons/fa";
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";

class SideNav extends Component {
        render() {
        return (
            <Fragment>
                <div className="sidenavCustom">
                    <NavLink> <Link className="NavItem" to=""> <FaHome /> </Link></NavLink>
                    <NavLink><Link className="NavItem" to=""> <FaEnvelope /> </Link></NavLink>
                    <NavLink><Link className="NavItem" to=""> <FaBookOpen/> </Link></NavLink>
                    <NavLink><Link className="NavItem" to=""> <FaCode /> </Link></NavLink>
                    <NavLink><Link className="NavItem" to=""> <FaFolder /> </Link></NavLink>
                    <NavLink><Link className="NavItem" to=""> <FaComment /> </Link></NavLink>
                    <NavLink><Link className="NavItem" to=""> <FaPowerOff/> </Link></NavLink>
                </div>

                <Navbar bg="dark" className="sideHiddenNav">
                    <Container>
                        <Nav className="bg-dark m-auto sideHiddenNav">
                            <NavLink> <Link className="NavItem" to=""> <FaHome /> </Link></NavLink>
                            <NavLink><Link className="NavItem" to=""> <FaEnvelope /> </Link></NavLink>
                            <NavLink><Link className="NavItem" to=""> <FaBookOpen/> </Link></NavLink>
                            <NavLink><Link className="NavItem" to=""> <FaCode /> </Link></NavLink>
                            <NavLink><Link className="NavItem" to=""> <FaFolder /> </Link></NavLink>
                            <NavLink><Link className="NavItem" to=""> <FaComment /> </Link></NavLink>
                            <NavLink><Link className="NavItem" to=""> <FaPowerOff/> </Link></NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default SideNav;