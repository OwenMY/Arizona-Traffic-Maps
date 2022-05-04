import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import FeedEntry from './FeedEntry.jsx'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 1000px;
  border-radius: 10px;
  margin: 20px auto;
  background-color: rgba(0,0,0,.2);
`;

const FeedHeader = styled.div`
  color: white;
`;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 5px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Home = ({feed}) => {
  const partialFeed = feed.slice(0, 50);
  console.log(partialFeed)

  return (
    <HomeContainer>
      <FeedHeader>
        <h2>Traffic Events</h2>
      </FeedHeader>
      <FeedContainer>{
        partialFeed.length ? partialFeed.map((event) => <FeedEntry event={event} key={event.ID}/>) : null
      }</FeedContainer>
    </HomeContainer>
  )
}

export default Home;