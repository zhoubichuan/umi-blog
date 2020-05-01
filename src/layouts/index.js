import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "umi/link";

export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a href="#" className="navbar-brand">
                管理
              </a>
            </div>
            <div>
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">首页</Link>
                </li>
                <li>
                  <Link to="/user">用户管理</Link>
                </li>
                <li>
                  <Link to="/profile">个人设置</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12">{this.props.children}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}
