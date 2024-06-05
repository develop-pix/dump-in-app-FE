import NaverMapView, { Marker } from 'react-native-nmap';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import GoBackButtonBlack from 'components/reuse/button/GoBackButtonBlack';
import { BranchLocationProps } from 'interfaces/Branch.interface';
import { BranchLocationContainer } from 'styles/layout/branch/BranchLocation.style';
import { GoBackButtonFloatContainer } from 'styles/layout/reuse/button/GoBackButton.style';

import BranchDistance from './BranchDistance';

export default function BranchLocation({ latitude, longitude, distance }: BranchLocationProps) {
    const safeAreaInset = useSafeAreaInsets();
    const defaultLatitude = 37.564362;
    const defaultLongitude = 126.977011;
    const geolocation = {
        latitude: latitude || defaultLatitude,
        longitude: longitude || defaultLongitude,
    };
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
            <GoBackButtonFloatContainer style={{ top: safeAreaInset.top }}>
                <GoBackButtonBlack />
            </GoBackButtonFloatContainer>
            <BranchDistance distance={distance} />
        </BranchLocationContainer>
    );
}
