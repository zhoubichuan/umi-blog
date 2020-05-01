import React, { Component, Fragment } from "react";
import Link from "umi/link";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default class Layout extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <ul className="nav nav-stack">
            <li>
              <Link to="/user/list">用户列表</Link>
            </li>
            <li>
              <Link to="/user/add">添加用户</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <TransitionGroup>
            <CSSTransition
              key={this.props.location.pathname}
              classNames="fade"
              timeout={300}
            >
              {this.props.children}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    );
  }
}
