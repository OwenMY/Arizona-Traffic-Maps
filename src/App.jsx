import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #2e2e2e;
  height: 55px;
  margin: 0;
  padding: 0;

`;

const Logo = styled.div`
  font-family: 'Tapestry', cursive;
  height: auto;
  width: auto;
  align-self: center;
  font-size: 34px;
`;

const NavBarButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #2e2e2e;
  height: 55px;
  margin: 0;
  padding: 0;
`;

const NavButton = styled.div`
  align-self: flex-end;
  height: auto;
  width: auto;
  padding: 0px 20px;
  text-align: center;
  line-height: 50px;
  // border: 1px solid white;
  cursor: pointer;
  &:hover {
    background-color: darkgrey;
  }
`;

const WelcomeContainer = styled.div`
  display: flex;
  height: 500px;
  width: 500px;
  border-radius: 10px;
  margin: 20px auto;
  background-color: #2e2e2e;
`;


const App = () => {
  return (
    <AppContainer>
      <NavBar>
        <Logo>AZ Traffic and Contruction</Logo>
        <NavBarButtonsContainer>
          <NavButton>Home</NavButton>
          <NavButton>Maps</NavButton>
          <NavButton>Cameras</NavButton>
          <NavButton>Emergency</NavButton>
        </NavBarButtonsContainer>
      </NavBar>
      <WelcomeContainer>
        Welcome!
      </WelcomeContainer>
    </AppContainer>
  )
};

export default App;