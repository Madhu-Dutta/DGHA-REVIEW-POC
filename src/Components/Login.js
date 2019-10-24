import React, { Component } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { PostData } from "../services/PostData";

export default class Login extends Component {
  constructor() {
    super();

    //Initial state
    this.state = {
      email: "",
      password: "",
      redirect: false,
      error: ""
    };
  }

  //Handle the inputbox changes
  handleInputChange = e => {
    e.preventDefault();

    //Grab the input fields here
    let inputName = e.target.name;
    let inputValue = e.target.value;

    // //Handle change events on input fields
    this.setState({
      [inputName]: inputValue
    });
    console.log(this.state);
  };

  //OnClick event on the login button
  login = e => {
    e.preventDefault();
    console.log("Clicked", this.state);

    // debugger;
    PostData(this.state).then((result) => {
      let responseJSON = result;
      console.log(responseJSON);
      if (responseJSON.token) {
        sessionStorage.setItem('userData', responseJSON);
        this.setState({ redirect: true })
      } else {
        console.log('login error');
      }
    })
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={"/Review"} />);
    }
    if (sessionStorage.getItem('userData')) {
      return (<Redirect to={'/Review'} />);
    }
    return (
      <Container>
        <div className="login-wrapper">
          <div className="header">
            <h2 className="text-center">Log In</h2>
            <div className="text-center">to continue to site</div>
            <hr />
          </div>
          <div className="msg-block"></div>

          <Form name="form" onSubmit={this.login}>
            <FormGroup>
              <Input
                type="text"
                className="form-control"
                onChange={this.handleInputChange}
                name="email"
                placeholder="email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                className="form-control"
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
                required
              />
            </FormGroup>
            <FormGroup>
              <Row>
                <Col xs={6}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" /> Remember me
                    </Label>
                  </FormGroup>
                </Col>
                <Col xs={6}>
                  <Link to="/Register" style={{ color: "black" }}>
                    Forgot Password?
                  </Link>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Input
                type="submit"
                onClick={this.login}
                value="Log In"
                id="button"
              />
            </FormGroup>
            <FormGroup className="text-center">
              <div style={{ marginBottom: "10px" }}>Or Log In with</div>
              <Button id="btnFb">
                <a
                  href="https://www.facebook.com/"
                  style={{ color: "white" }}
                  aria-label="re-direct to facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facebook"
                >
                  <i className="fab fa-facebook-f fa-2x" />
                  acebook
                </a>
              </Button>
            </FormGroup>
            <hr />
            <FormGroup className="text-center">
              <div className="acctInfo">Don't have an account?</div>
              <Link
                to="/Register"
                className="btn btn-link"
                aria-label="re-direct to sign-up page"
                style={{ color: "black" }}
              >
                Sign Up Here
              </Link>
            </FormGroup>
          </Form>
        </div>
      </Container>
    );
  }
}
