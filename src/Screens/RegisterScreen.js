import React from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import mainLogo from '../images/foodoo-logo.png';
import { Link } from "react-router-dom";


let RegisterScreen = () => {
    return (
    <div className="register-contianer">
        <header>
            <div><Link to="/"><img src={mainLogo} className="main-logo" alt="mainlogo" /></Link></div>
        </header>
    <div className="form">
        <FormGroup controlId="email" bsSize="large">
            <FormControl
              placeholder="Type your email address"
              autoFocus
              type="email"
            />
        </FormGroup>

        <FormGroup controlId="username" bsSize="large">
            <FormControl
              placeholder="Type your user name"
              type="username"
        />
        </FormGroup>

        <FormGroup controlId="password" bsSize="large">
            <FormControl
              placeholder="Type your password"
              type="password"
        />
        </FormGroup>

        <FormGroup controlId="location" bsSize="large">
            <FormControl
              placeholder="Type your location (Atlanta, Ga)"
              type="location"
        />
        </FormGroup>

            <div className="sl">
            <Button
                block
                bsSize="large"
                type="Submit"
            >
                Submit
            </Button>
            </div>
    </div>
    </div>
    )
}

export default RegisterScreen;