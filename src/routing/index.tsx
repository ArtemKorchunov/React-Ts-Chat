import React, { FunctionComponent } from "react";
import { CSSTransition } from "react-transition-group";
import styled from 'styled-components';

import { Home, Login, SignUp } from "../components";
import { PrivateRoute, Route } from './PrivateRoute'

const Page = styled.div`
  height: 100%;
`;

type RouteItem = {
  path: string;
  Component: React.SFC | React.ComponentClass;
  RouteComponent?: React.SFC;
}
const routes: RouteItem[] = [
  { path: "/", Component: Home, RouteComponent: PrivateRoute },
  { path: "/login", Component: Login },
  { path: "/signup", Component: SignUp }
];

const Routes: FunctionComponent<{}> = () => {
  return (
    <>
      {routes.map(({ path, Component, RouteComponent = Route }) => (
        <RouteComponent key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <Page>
                <Component />
              </Page>
            </CSSTransition>
          )}
        </RouteComponent>
      ))}
    </>
  );
};

export default Routes;
