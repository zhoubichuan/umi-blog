import React, { Component } from "react";
import Link from "umi/link";
export default class User extends Component {
  state = { users: [] };
  componentDidMount() {
    let usersStr = localStorage.getItem("users");
    let users = usersStr ? JSON.parse(usersStr) : [];
    this.setState({ users });
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <ul className="list-group">
            {this.state.users.map((user, key) => (
              <li key={key} className="list-group-item">
                <Link to={`/user/detail/${user.id}`}> {user.username}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
