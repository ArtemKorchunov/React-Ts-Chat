import React from "react";
import { Menu, Icon, Layout } from "antd";
import { ClickParam } from "antd/lib/menu";
import {
  compose,
  withStateHandlers,
  StateHandlerMap,
  StateHandler,
  withHandlers
} from "recompose";
import { withRouter, RouteComponentProps } from "react-router-dom";

type ExternalProps = {};

// withStateHandlers types
interface StateProps {
  collapsed: boolean;
}

type StateHandlerProps = StateHandlerMap<StateProps> & {
  toggleCollapsed: StateHandler<StateProps>;
};

// withHandlers types
type withHandlersProps = {
  redirectTo: (param: ClickParam) => void;
};

// Props
type EnhancedProps = StateProps &
  StateHandlerProps &
  ExternalProps &
  withHandlersProps &
  RouteComponentProps;

const menuItems = [
  {
    iconType: 'home',
    spanText: 'Home',
    url: '/'
  },
  {
    iconType: "login",
    spanText: "Login",
    url: '/login'
  },
  {
    iconType: "import",
    spanText: "Sign Up",
    url: '/signup'
  }
];

const MainMenu: React.SFC<EnhancedProps> = ({
  collapsed,
  toggleCollapsed,
  redirectTo
}) => {
  return (
    <Layout.Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
      <Menu mode="inline" style={{ height: "100%" }} theme="dark" onClick={redirectTo}>
        {menuItems.map((menuItem) => (
          <Menu.Item key={menuItem.url}>
            <Icon type={menuItem.iconType} />
            <span>{menuItem.spanText}</span>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

export default compose<EnhancedProps, ExternalProps>(
  withRouter,
  withStateHandlers<StateProps, StateHandlerProps, ExternalProps>(
    () => ({ collapsed: true }),
    {
      toggleCollapsed: ({ collapsed }) => () => ({ collapsed: !collapsed })
    }
  ),
  withHandlers<RouteComponentProps, withHandlersProps>({
    redirectTo: ({ history }) => ({ key }) => {
      history.push(key);
    }
  })
)(MainMenu);
