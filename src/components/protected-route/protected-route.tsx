import React from "react";
import { Route, useLocation, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "../../utils/types";

type TProtectedRoute = RouteProps & {
  children?: React.ReactNode | JSX.Element,
  forAuth?: boolean
}

export default function ProtectedRoute({ children, forAuth, ...rest }: TProtectedRoute) {
  const location = useLocation();
  const { isLogged } = useSelector(state => state.login)

  if (isLogged && forAuth) {
    return (
      <Route>{children}</Route>
    )
  }
  if (isLogged && !forAuth) {
    return (
      <Redirect to={{ pathname: '/', state: { from: location } }} />
    )
  }
  if (!isLogged && !forAuth) {
    return (
      <Route> {children} </Route>
    )
  }

  return (<></>)
}
