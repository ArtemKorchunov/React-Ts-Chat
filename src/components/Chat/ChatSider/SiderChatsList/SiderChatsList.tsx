import React, { useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

import ChatListItem from './ChatsListItem';

const ChatsListContent = styled.div`
  height: 100%;
  overflow: auto;
`;

//TODO: change wrap to content, wrap could be only in something.view.tsx component !
const SiderChatsList = () => {
  const chatsListParentEl = useRef(null);
  return (
    <ChatsListContent ref={chatsListParentEl}>
      <InfiniteScroll
        pageStart={0}
        loadMore={() => {}}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
        useWindow={false}
        getScrollParent={() => chatsListParentEl.current as any}
      >
        <ChatListItem />
      </InfiniteScroll>
    </ChatsListContent>
  );
};

export default SiderChatsList;
