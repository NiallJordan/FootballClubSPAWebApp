import React, { Component } from "react";
import { Navbar, Nav} from 'react-bootstrap';
import "./header.css";
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Navbar fixed="top" className="dark-bar container-fluid" variant="dark" >
                <Navbar.Brand className="row " href="/">Football Club List  <span className="badge badge-pill badge-success">{this.props.noClubs}</span> </Navbar.Brand>
                <Navbar.Collapse className="col-md-6 offset-4" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Link to={`clubsForm` }>Add Club</Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header;