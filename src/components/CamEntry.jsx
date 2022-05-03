import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';

const CameraFootage = styled.img`
  max-height: 200px;
  width: auto;
  margin: auto;
  justify-self: center;
`;

const CamEntry = ({cam}) => {
  return (
    <CameraFootage src={cam.Url}/>
  )
};

export default CamEntry;