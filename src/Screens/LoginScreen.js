import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import { loginAndFetchUserDetails } from "../Lib/api-calls";

// export default class LoginScreen extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

let LoginScreenWrapper = ({ state, props }) => {

  let userCredentials = {};

  // let validateForm = () => {
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // };

  let handleSubmit = event => {
        event.preventDefault();
        if(userCredentials.email && userCredentials.password) {
          console.log(userCredentials);
            loginAndFetchUserDetails(userCredentials)
                .then(res => res.json())
                .then(user => {
                    console.log("USER CREDENTIALS WHEN I LOG IN", user);
                    if(user.jwt) {
                        localStorage.setItem("authorization", user.jwt);
                        // addUserToStore(user);
                        // props.history.push("/");
                    } else {
                        alert("Can't log you in");
                    }
                })
        } else {
            console.log("Enter valid Email Address or Password");
        }
    };

    let readEmail = event => {
      console.log(event.target.value);
      userCredentials.email = event.target.value;
    };

    let readPassword = event => {
      console.log(event.target.value);
      userCredentials.password = event.target.value;
    };

    return (
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              onChange={readEmail}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              onChange={readPassword}
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
}

let mapStateToProps = (state, props) => ({ state, props });

// let mapDispatchToProps = dispatch =>  ({ addUserToStore: (user) => dispatch(addUserToStore(user)) });
      
let LoginScreen = connect(mapStateToProps)(LoginScreenWrapper);

export default LoginScreen;