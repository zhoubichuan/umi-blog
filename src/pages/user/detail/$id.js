import React, { Component } from "react";
export default class User extends Component {
  render() {
    let id = this.props.match.params.id;
    return (
      <ul className="nav nav-stack">
        <li>ID:{id}</li>
        <li>姓名:{id}</li>
      </ul>
    );
  }
}
