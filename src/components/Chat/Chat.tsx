import React from 'react';
import { withState } from 'recompose';

import ChatSiderView, { SiderTopMenu, SiderChatsList } from './ChatSider';
import ChatHistoryView, {
  HistoryTopMenu,
  DialogInput,
  Dialog,
} from './ChatHistory';
import ChatView from './Chat.view';

type Props = {
  textareaHeight: number;
  setTextareaHeight: (count: number) => number;
};

const Chat: React.SFC<Props> = ({ textareaHeight, setTextareaHeight }) => {
  return (
    <ChatView
      sider={
        <ChatSiderView
          topMenu={<SiderTopMenu />}
          chatsList={<SiderChatsList />}
        />
      }
      history={
        <ChatHistoryView
          topMenu={<HistoryTopMenu />}
          dialog={<Dialog textareaHeight={textareaHeight} />}
          dialogInput={<DialogInput setTextareaHeight={setTextareaHeight} />}
        />
      }
    />
  );
};

export default withState<{}, number, 'textareaHeight', 'setTextareaHeight'>(
  'textareaHeight',
  'setTextareaHeight',
  0,
)(Chat);
