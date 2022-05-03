import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_KEY } from './../config.js';
import Home from './components/Home.jsx';
import Cameras from './components/Cameras.jsx';

const URL = `https://az511.com/api/v2/get/`;

const config = {
  headers: {
    "content-type": "application/json"
  }
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(0,0,0,.2);
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
  background-color: inherit;
  height: 55px;
  margin: 0;
  padding: 0;
`;

const NavButton = styled.div`
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

const App = () => {
  const [view, setView] = useState('Home');
  const [feed, setFeed] = useState([]);
  const [cameras, setCameras] = useState([]);
  const [emergency, setEmergency] = useState([]);
  const [messageBoards, setMessageBoards] = useState([]);

  useEffect(() => {
    axios.get(URL + `messagesigns?key=${API_KEY}`, config)
    .then((results) => setMessageBoards(results.data))
    .catch((err) => console.error(err));

    axios.get(URL + `alerts?key=${API_KEY}`, config)
    .then((results) => setEmergency(results.data))
    .catch((err) => console.error(err));

    axios.get(URL + `event?key=${API_KEY}`, config)
    .then((results) => setFeed(results.data))
    .catch((err) => console.error(err));

    axios.get(URL + `cameras?key=${API_KEY}`, config)
    .then((results) => setCameras(results.data))
    .catch((err) => console.error(err));
  }, []);

  return (
    <AppContainer>
      <NavBar>
        <Logo>AZ Traffic and Construction</Logo>
        <NavBarButtonsContainer>
          <NavButton onClick={() => setView('Home')} >Home</NavButton>
          <NavButton onClick={() => setView('Maps')}>Maps</NavButton>
          <NavButton onClick={() => setView('Cameras')}>Cameras</NavButton>
          <NavButton onClick={() => setView('Emergency')}>Emergency</NavButton>
        </NavBarButtonsContainer>
      </NavBar>
      {view === 'Home' ? <Home feed={feed}/> : null}
      {view === 'Maps' ? 'poop2' : null}
      {view === 'Cameras' ? <Cameras cameras={cameras}/> : null}
      {view === 'Emergency' ? 'poop4' : null}
    </AppContainer>
  )
};

export default App;