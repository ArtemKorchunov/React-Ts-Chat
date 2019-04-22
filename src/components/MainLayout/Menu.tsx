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
import styled from "styled-components";
import { withRouter, RouteComponentProps } from "react-router-dom";

const SiderStyled = styled(Layout.Sider)``;

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
    <SiderStyled collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
      <Menu mode="inline" style={{ height: "100%" }} theme="dark" onClick={redirectTo}>
        {menuItems.map((menuItem) => (
          <Menu.Item key={menuItem.url}>
            <Icon type={menuItem.iconType} />
            <span>{menuItem.spanText}</span>
          </Menu.Item>
        ))}
      </Menu>
    </SiderStyled>
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
  withHandlers<ExternalProps & RouteComponentProps, withHandlersProps>({
    redirectTo: ({ history }) => ({ key }) => {
      history.push(key);
    }
  })
)(MainMenu);
