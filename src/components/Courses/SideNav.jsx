import React, {Component, Fragment} from 'react';
import {NavLink} from "react-bootstrap";
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

class SideNav extends Component {
    constructor() {
        super();
        this.state={
            sideNav:false,
            sideNavClass:"sidenavClose",
            NavText:"d-none",
            mainDivOverlay:"main-overlay-close"
        }

        this.showHideSideNav=this.showHideSideNav.bind(this);
    }


    showHideSideNav(){
        if(this.state.sideNav===false){
            this.setState({sideNav:true,NavText:"",sideNavClass:"sidenavOpen",mainDivOverlay:"main-overlay-open"})
        }
        else {
            this.setState({sideNav:false,NavText:"d-none",sideNavClass:"sidenavClose",mainDivOverlay:"main-overlay-close"})
        }
    }


    render() {
        return (
            <Fragment>
                

                <div className={this.state.sideNavClass}>
                    <NavLink> <Link className="NavItem" to=""> <FaHome /> <span className={this.state.NavText}>Dashboard</span> </Link></NavLink>
                    <NavLink><Link className="NavItem" to=""> <FaEnvelope /> <span className={this.state.NavText}>Site Home</span></Link></NavLink>
                    <NavLink><Link className="NavItem" to=""> <FaBookOpen/> <span className={this.state.NavText}>Courses</span></Link></NavLink>
                    <NavLink><Link className="NavItem" to=""> <FaCode /> <span className={this.state.NavText}>Projects</span></Link></NavLink>
                    <NavLink><Link className="NavItem" to=""> <FaFolder /> <span className={this.state.NavText}>Notice</span></Link></NavLink>
                    <NavLink><Link className="NavItem" to=""> <FaComment /> <span className={this.state.NavText}>Help</span></Link></NavLink>
                    <NavLink><Link className="NavItem" to=""> <FaPowerOff/> <span className={this.state.NavText}>Notice</span></Link></NavLink>
                    
                </div>
                <div onClick={this.showHideSideNav} className={this.state.mainDivOverlay}>

                </div>

            </Fragment>
        );
    }
}

export default SideNav;