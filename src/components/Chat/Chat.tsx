import React from 'react';

import ChatSiderView, { SiderTopMenu, SiderChatsList } from './ChatSider';
import ChatView from './Chat.view';

const Chat = () => {
  return (
    <ChatView
      sider={
        <ChatSiderView
          topMenu={<SiderTopMenu />}
          chatsList={<SiderChatsList />}
        />
      }
    />
  );
};

export default Chat;
