import React from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  padding: 12px;
  color: black;
  font-size: 25px;
`;

const EventInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EventImage = styled.img`
  align-self: flex-end;
  width: 100px;
`;

const MapMarker = ({event, icon}) => {
  const [showWindow, setShowWindow] = useState(false);

  return (
    <Marker key={event.ID} onClick={() => setShowWindow(true)} position={{ lat:event.Latitude, lng:event.Longitude }} icon={icon}>
    { showWindow ? <InfoWindow
      onCloseClick={() => setShowWindow(false)}
      position={{ lat:event.Latitude, lng:event.Longitude }}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}>
    <InfoContainer>
      <div>
        {event.Description}
      </div>
      <EventInfo>
        { event.Details.length ? `Event: ${event.Details}` : null }
        <EventImage src={"https://b.rgbimg.com/users/h/hi/hisks/600/mhYkWSW.jpg"} />
      </EventInfo>
    </InfoContainer>
  </InfoWindow> : null }
  </Marker>
  );
};

export default MapMarker;