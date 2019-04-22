import React, { FunctionComponent } from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import styled from 'styled-components';

import { Home, Login } from "../components";

const Page = styled.div`
  height: 100%;
`;
const routes = [
  { path: "/", Component: Home },
  { path: "/login", Component: Login }
];

const Routes: FunctionComponent<{}> = () => {
  return (
    <>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
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
        </Route>
      ))}
    </>
  );
};

export default Routes;
