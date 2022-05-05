import React from 'react';
import { GoogleMap, useLoadScript, Marker, Circle, InfoBox, InfoWindow } from '@react-google-maps/api';
import { useState, useEffect, useCallback, useRef } from 'react';
import { GOOGLE_API_KEY } from './../../config.js';
import styled from 'styled-components';
import MapMarker from './MapMarker.jsx';

const containerStyle = {
  width: '97vw',
  height: '100vh',
  margin: '0 auto'
};

const options = {
  mapId: '5a15547c511cb713'
};

export default function TrafficMap({feed}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map feed={feed}/>;
};

const Map = ({feed}) => {
  const [showBox, setShowBox] = useState(false);

  const partialFeed = feed.slice(0, 50);

  const icon = {
    path: "M9 22C9 22 18 16 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 16 9 22 9 22ZM12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9Z",
    strokeColor: "#FFFFFF",
    fillColor: "orange",
    fillOpacity: 0.8,
    scale: 1.5,
    anchor: new google.maps.Point(9, 22),
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={12}
      center={{ lat: 33.44019493553106, lng: -112.07062962364152 }}
      options={options}
    >
      {partialFeed.map((event) => <MapMarker key={event.ID} event={event} icon={icon}/>)}

    </GoogleMap>
  );
};