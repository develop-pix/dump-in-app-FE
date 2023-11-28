import React from 'react';
import {Platform} from 'react-native';
import {BranchLocationContainer} from '../../styles/layout/branch/Branch.style';
import BranchDistance from './BranchDistance';
import {BranchLocationProps} from '../../interfaces/Branch.interface';
import {GoBackButtonFloatContainer} from '../../styles/layout/reuse/button/GoBackButton.style';
import NaverMapView, {Marker} from 'react-native-nmap';
import GoBackButtonBlack from '../reuse/button/GoBackButtonBlack';

export default function BranchLocation({
  geolocation,
  distance,
}: BranchLocationProps) {
  const platform = Platform.OS;
  console.log('BranchLocation-geolocation:' + geolocation);
  console.log('BranchLocation-distance:' + distance);
  return (
    <BranchLocationContainer>
      <NaverMapView
        style={{width: '100%', height: '100%'}}
        center={{...geolocation, zoom: 17}}
        zoomControl={false}
        maxZoomLevel={17}
        minZoomLevel={17}
        zoomGesturesEnabled={false}
        rotateGesturesEnabled={false}
        tiltGesturesEnabled={false}
        stopGesturesEnabled={false}
        showsMyLocationButton={false}>
        <Marker coordinate={geolocation} />
      </NaverMapView>
      <GoBackButtonFloatContainer platform={platform}>
        <GoBackButtonBlack />
      </GoBackButtonFloatContainer>
      <BranchDistance />
    </BranchLocationContainer>
  );
}
