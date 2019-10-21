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
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super();

    //Initial state
    this.state = {
      email: "",
      password: ""
    };
  }

  email = e => {
    this.setState({ email: e.target.value });
  };
  //Password update on input text change
  password = e => {
    this.setState({ password: e.target.value });
  };
  //OnClick event on the login button
  login = e => {
    e.preventDefault();
    console.log("Clicked");
    // debugger;
  };

  render() {
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
                type="email"
                className="form-control"
                onChange={this.email}
                name="email"
                placeholder="Email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                className="form-control"
                onChange={this.password}
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
