import React from 'react';
import { Platform } from 'react-native';
import NaverMapView, { Marker } from 'react-native-nmap';

import { BranchLocationProps } from '../../interfaces/Branch.interface';
import { BranchLocationContainer } from '../../styles/layout/branch/BranchLocation.style';
import { GoBackButtonFloatContainer } from '../../styles/layout/reuse/button/GoBackButton.style';
import GoBackButtonBlack from '../reuse/button/GoBackButtonBlack';

import BranchDistance from './BranchDistance';

export default function BranchLocation({ geolocation, distance }: BranchLocationProps) {
    const platform = Platform.OS;
    return (
        <BranchLocationContainer>
            <NaverMapView
                style={{ width: '100%', height: '100%' }}
                center={{ ...geolocation, zoom: 17 }}
                zoomControl={false}
                maxZoomLevel={17}
                minZoomLevel={17}
                zoomGesturesEnabled={false}
                rotateGesturesEnabled={false}
                tiltGesturesEnabled={false}
                stopGesturesEnabled={false}
                showsMyLocationButton={false}
                scaleBar={false}>
                <Marker coordinate={geolocation} />
            </NaverMapView>
            <GoBackButtonFloatContainer platform={platform}>
                <GoBackButtonBlack />
            </GoBackButtonFloatContainer>
            <BranchDistance distance={distance} />
        </BranchLocationContainer>
    );
}
