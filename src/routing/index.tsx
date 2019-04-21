import React, { FunctionComponent } from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { Home } from "../components";

const routes = [{ path: "/", name: "Home", Component: Home }];

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
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </>
  );
};

export default Routes;
