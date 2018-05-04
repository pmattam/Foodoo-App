import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Navigation extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Foodoo</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} Link to="/login">Login</NavItem>
                    <NavItem eventKey={2} Link to="/events">Events</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Sign Up</MenuItem>
                        <MenuItem eventKey={3.2}>Log In</MenuItem>
                        <MenuItem eventKey={3.3}>Find Events</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>New Event</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}
