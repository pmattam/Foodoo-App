import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export class Navbar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Foodoo</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Link 1</NavItem>
                    <NavItem eventKey={2} href="#">Link 2</NavItem>
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
