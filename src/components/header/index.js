import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./header.css";
class Header extends Component {
  render() {
    return (
      <Navbar fixed="top" className="dark-bar container-fluid" variant="dark" >
                <Navbar.Brand classname="row " href="/">Football Club List  <span className="badge badge-pill badge-success">{this.props.noClubs}</span> </Navbar.Brand>
                <Navbar.Collapse classname="col-md-6 offset-4" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;