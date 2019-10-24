import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PlacesSearch from "./Places/PlacesSearch";

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  logout = () => {
    console.log("logout");
    sessionStorage.setItem('userData', '');
    sessionStorage.clear();
    this.setState({
      redirect: true
    });
  };
  render() {
    if (this.state.redirect) {
      return (<Redirect to={"/"} />);
    }
    return (
      <div>
        <h1>Review</h1>
        <button onClick={this.logout}>LOG OUT</button>
        <PlacesSearch />
      </div>
    );
  }
}
