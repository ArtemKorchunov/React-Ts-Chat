import React from 'react';

import ChatSiderView, { SiderTopMenu, SiderChatsList } from './ChatSider';
import ChatHistoryView, { HistoryTopMenu } from './ChatHistory';
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
      history={<ChatHistoryView topMenu={<HistoryTopMenu />} />}
    />
  );
};

export default Chat;
