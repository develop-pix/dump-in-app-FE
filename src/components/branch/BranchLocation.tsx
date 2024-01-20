import { Platform } from 'react-native';
import NaverMapView, { Marker } from 'react-native-nmap';

import GoBackButtonBlack from 'components/reuse/button/GoBackButtonBlack';
import { BranchLocationProps } from 'interfaces/Branch.interface';
import { BranchLocationContainer } from 'styles/layout/branch/BranchLocation.style';
import { GoBackButtonFloatContainer } from 'styles/layout/reuse/button/GoBackButton.style';

import BranchDistance from './BranchDistance';

export default function BranchLocation({ latitude, longitude, distance }: BranchLocationProps) {
    const platform = Platform.OS;
    const geolocation = { latitude, longitude };
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
