import React, { useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';
import ChatListItem from './ChatsListItem';

const ChatsListWrap = styled.div`
  height: 100%;
  overflow: auto;
`;

const SiderChatsList = () => {
  const chatsListParentEl = useRef(null);
  return (
    <ChatsListWrap ref={chatsListParentEl}>
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
    </ChatsListWrap>
  );
};

export default SiderChatsList;
