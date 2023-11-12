import React, {useState} from 'react';
import {MapContainer} from '../../../styles/layout/location/Map.style';
import MapInput from './MapInput';

export default function Map() {
  const [location, setLocation] = useState<string>('주소 입력');
  return (
    <MapContainer>
      <MapInput location={location} setLocation={setLocation} />
    </MapContainer>
  );
}
