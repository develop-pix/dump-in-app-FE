import React from 'react';
import {LocationContainer} from '../styles/layout/location/Map.style';
import LocationForm from '../components/location/LocationForm';

export default function Location() {
  return (
    <LocationContainer>
      <LocationForm />
    </LocationContainer>
  );
}
