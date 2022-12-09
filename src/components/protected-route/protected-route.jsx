import React from "react";
import { Route, useLocation, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import {PropTypes} from 'prop-types'

ProtectedRoute.propTypes = {
  children:  PropTypes.element.isRequired,
  rest: PropTypes.any.isRequired
}

export default function ProtectedRoute({ children, ...rest }) {
  const { forAuth } = rest;
  const location = useLocation();
  const { isLogged } = useSelector(state => state.login)
  if (isLogged && forAuth) {
    return (
      <Route>{children}</Route>

    )
  }
  if (isLogged && !forAuth) {
    return (
      <Route>
        {children} </Route>
      && <Redirect to={{ pathname: '/', state: { from: location } }} />
    )
  }
  if (!isLogged && !forAuth) {
    return (
      <Route>
        {children} </Route>
    )
  }

}
