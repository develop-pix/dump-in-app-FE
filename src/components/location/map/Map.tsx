import React, {useState} from 'react';
import {MapContainer} from '../../../styles/layout/location/Map.style';
import MapInput from './MapInput';

export default function Map() {
  const [location, setLocation] = useState<string>('주소 입력');
  // 지도 움직일시에 해당 위치 설정(추후 추가 예정)
  console.log(setLocation);
  return (
    <MapContainer>
      <MapInput location={location} />
    </MapContainer>
  );
}
