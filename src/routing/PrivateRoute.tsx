import * as React from "react";
import { Route as BaseRoute, RouteProps, Redirect } from "react-router";
import { localStorageApi, TOKEN_ID } from "../services";

/* export function withoutRouteProps<P>(
  Component: React.ComponentClass<P> | React.SFC<P>
): React.ComponentClass<any, any> {
  class C extends React.Component<any, any> {
    public render(): JSX.Element {
      const { match, location, history, staticContext, children, ...rest } = this.props;
      return React.createElement(Component, rest);
    }
  }
  return C;
} */

interface FilteredRouteProps extends RouteProps {
  component?: React.SFC<any> | React.ComponentClass<any>;
}

interface PrivateFilteredRouteProps extends FilteredRouteProps {
  redirectPage?: string;
}

export function Route(props: FilteredRouteProps) {
  const { component, ...routeProps } = props;

  if (component) {
    return (
      <BaseRoute component={component} {...routeProps} />
    );
  }

  return <BaseRoute {...routeProps} />;
}

export function PrivateRoute(props: PrivateFilteredRouteProps) {
  const { redirectPage = "/", component, ...routeProps } = props;

  if (component) {
    return (
      <Route
        {...routeProps}
        render={props => {
          return localStorageApi.getItem(TOKEN_ID) ? (
            <BaseRoute component={component} {...props} />
          ) : (
            <Redirect push to={redirectPage} />
          );
        }}
      />
    );
  }

  return <BaseRoute {...routeProps} />;
}