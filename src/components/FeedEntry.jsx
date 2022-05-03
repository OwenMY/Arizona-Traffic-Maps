import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';

const FeedDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #949428;
  margin: 10px 0;
  padding: 4px;
  border: 1px #2e2e2e solid;
  overflow-wrap: breakword;
`;

const FeedEntry = ({event}) => {
  let widthIndex = event.Description.indexOf('Width');

  return (
    <FeedDataContainer>
      <span>{event.Description}</span>
      <span>Details: {event.Details.length ? event.Details : 'N/A'}</span>
      <span>Event: {event.EventType}</span>
    </FeedDataContainer>
  )
};

export default FeedEntry;