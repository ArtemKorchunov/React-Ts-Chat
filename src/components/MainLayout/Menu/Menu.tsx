import React from 'react';
import { Menu, Icon, Layout } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import {
  compose,
  withStateHandlers,
  StateHandlerMap,
  StateHandler,
  withHandlers,
  mapProps,
} from 'recompose';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { localStorageApi } from '../../../services';
import { menuItemsPublic, menuItemsPrivate } from './constants';

type ExternalProps = {};

interface MapPropsTypes {
  menuItems: typeof menuItemsPublic;
}
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
  RouteComponentProps &
  MapPropsTypes;

const MainMenu: React.SFC<EnhancedProps> = ({
  collapsed,
  toggleCollapsed,
  redirectTo,
  location: { pathname },
  menuItems,
}) => {
  return (
    <Layout.Sider
      /*  breakpoint="md"
      collapsedWidth="0" */
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
    >
      <Menu
        mode="inline"
        style={{ height: '100%' }}
        theme="dark"
        onClick={redirectTo}
        defaultSelectedKeys={[pathname]}
      >
        {menuItems.map(menuItem => (
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
  withStateHandlers<StateProps, StateHandlerProps, ExternalProps>(
    () => ({ collapsed: true }),
    {
      toggleCollapsed: ({ collapsed }) => () => ({ collapsed: !collapsed }),
    },
  ),
  withRouter,
  mapProps((props: EnhancedProps) => ({
    menuItems: localStorageApi.hasToken() ? menuItemsPrivate : menuItemsPublic,
    ...props,
  })),
  withHandlers<RouteComponentProps, withHandlersProps>({
    redirectTo: ({ history }) => ({ key }) => {
      history.push(key);
    },
  }),
)(MainMenu);
