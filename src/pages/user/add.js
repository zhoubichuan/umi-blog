import React, { Component } from "react";

export default class User extends Component {
  state = { username: "" };
  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    let username = this.state.username;
    let user = { id: Date.now(), username };
    let usersStr = localStorage.getItem("users");
    let users = usersStr ? JSON.parse(usersStr) : [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    this.props.history.push("/user/list");
  };
  render() {
    let { username } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="control-label" htmlFor="username">
          用户名
        </label>
        <input
          className="form-control"
          id="username"
          type="text"
          value={username}
          onChange={this.handleChange}
        />
        <input type="submit" className="btn btn-primary" />
      </form>
    );
  }
}
