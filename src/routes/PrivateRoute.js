import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function({ render, ...rest }) {
  debugger;
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("login") ? render(props) : <Redirect to="/login" />
      }
    />
  );
}
