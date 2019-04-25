import React from 'react';

import ChatSiderView, { SiderTopMenu } from './ChatSider';
import ChatView from './Chat.view';

const Chat = () => {
  return <ChatView sider={<ChatSiderView topMenu={<SiderTopMenu />} />} />;
};

export default Chat;
