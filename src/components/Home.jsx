import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import img from './../../public/icons/PaperMap.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 1000px;
  border-radius: 10px;
  margin: 20px auto;
  background-color: rgba(0,0,0,0);
`;

const HomeHeaderContainer = styled.div`
  color: white;
  font-family: 'Lato', sans serif;
  margin: auto 0;
`;

const HomeHeader = styled.div`
  font-size: 37px;
`;

const FeedImage = styled.img`
  height: 300px;
  width: auto;
  margin: auto;
  opacity: .8;
`;

const Home = ({feed}) => {
  return (
    <HomeContainer>
      <HomeHeaderContainer>
        <HomeHeader>Arizona Traffic Maps</HomeHeader>
        <span>A better way to navigate Phoenix</span>
      </HomeHeaderContainer>
        <FeedImage src={img}/>
    </HomeContainer>
  )
}

export default Home;