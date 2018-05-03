import React from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import mainLogo from '../images/foodoo-logo.png';
import { Link } from "react-router-dom";
import { registerNewUser } from "../Lib/api-calls";
import { connect } from "react-redux";

let RegisterScreenWrapper = ({ props }) => {

    let userCredentials = {};

    let handleSubmit = event => {
        event.preventDefault();
        if(userCredentials.email && userCredentials.password && userCredentials.username) {
          console.log(userCredentials);
            registerNewUser(userCredentials)
                .then(res => res.json())
                .then(result => {
                    if(result.status === "success") {
                        props.history.push("/");
                    } else {
                        alert("Failed to Register New User");
                    }
                 })
        } else {
            console.log("Enter valid Info");
        }
    };

    let readEmail = event => {
    userCredentials.email = event.target.value;
    };
  
    let readUserName = event => {
    userCredentials.username = event.target.value;
    };

    let readPassword = event => {
        userCredentials.password = event.target.value;
    };

    let readLocation = event => {
        userCredentials.location = event.target.value;
    };
    

    return (
    <div className="register-container">
        <header>
            <div><Link to="/"><img src={mainLogo} className="main-logo" alt="mainlogo" /></Link></div>
        </header>
    <div className="form">
    <form onSubmit={handleSubmit} className="login-form">
        <FormGroup controlId="email" bsSize="large">
            <FormControl
              placeholder="email"
              autoFocus
              type="email"
              onChange={readEmail}
            />
        </FormGroup>

        <FormGroup controlId="username" bsSize="large">
            <FormControl
              placeholder="user name"
              type="username"
              onChange={readUserName}
        />
        </FormGroup>

        <FormGroup controlId="password" bsSize="large">
            <FormControl
              placeholder="password"
              type="password"
              onChange={readPassword}
        />
        </FormGroup>

        <FormGroup controlId="location" bsSize="large">
            <FormControl
              placeholder="location (Atlanta, Ga)"
              type="location"
              onChange={readLocation}
        />
        </FormGroup>

            <div className="sl">
            <Button
                block
                bsSize="large"
                type="submit"
            >
                Submit
            </Button>
            </div>
        </form>
    </div>
    </div>
    )
}

let mapStateToProps = (state, props) => ({ state, props });
      
let RegisterScreen = connect(mapStateToProps)(RegisterScreenWrapper);

export default RegisterScreen;