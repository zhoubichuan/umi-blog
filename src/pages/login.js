import React, { Component } from "react";
export default class Login extends Component {
  handleClick = event => {
    localStorage.setItem("login", "true");
    this.props.history.push("/profile");
  };
  render() {
    return <button onClick={this.handleClick}>登录</button>;
  }
}
