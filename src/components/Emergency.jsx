import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';

const EmergencyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 1000px;
  border-radius: 10px;
  margin: 20px auto;
  background-color: rgba(0,0,0,.2);
`;

const EmergencyHeaderContainer = styled.div`
  color: white;
  font-family: 'Lato', sans serif;
  margin: auto;
`;

const EmergencyHeader = styled.div`
  font-size: 100px;
`;

const Emergency = () => {
  return (
    <EmergencyContainer>
      <EmergencyHeaderContainer>
        <EmergencyHeader>Comming Soon!</EmergencyHeader>
      </EmergencyHeaderContainer>
    </EmergencyContainer>
  )
};

export default Emergency;