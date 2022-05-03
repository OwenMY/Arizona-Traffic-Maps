import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import CamEntry from './CamEntry.jsx'

const CamerasPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-width: 1200px;
  border-radius: 5px;
  margin: 20px auto;
  background-color: rgba(0,0,0,.2);
`;

const CamerasHeader = styled.div`
  color: white;
`;

const CamerasFeed = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow-y: auto;
  gap: 5px;
  align-items: center;
  ::-webkit-scrollbar {
    display: none;
  }
`;



const Cameras = ({cameras}) => {
  let partialCameras = cameras.slice(0, 27);

  return (
    <CamerasPageContainer>
      <h2>Cameras</h2>
      <span>Do I want to drive today?</span>
      <CamerasFeed>
        {cameras.length ? partialCameras.map((cam) => <CamEntry cam={cam} key={cam.Id} />) : null }
      </CamerasFeed>
    </CamerasPageContainer>
  )
};

export default Cameras;