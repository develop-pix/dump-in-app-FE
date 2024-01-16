import { useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';

import ResetLocationIcon from 'assets/image/icon/btn_reset.svg';
import { useAppSelector } from 'hooks/redux/store';
import { ResetLocationButtonProps } from 'interfaces/Location.interface';
import { ResetLocation, ResetLocationButtonContainer } from 'styles/layout/location/ResetLocationButton.style';
import { GetLocationAuthorization } from 'utils/GetLocation';

export default function ResetLocationButton({ GetCurrentLocation, setMyPosition, setZoom }: ResetLocationButtonProps) {
    const currentLocation = useAppSelector(state => state.location);

    /** 지도 zoom 변경 및, 화면을 내 위치로 전환 */
    const onPressResetLocation = () => {
        GetLocationAuthorization().then(result => {
            if (result === 'granted') {
                if (currentLocation.latitude && currentLocation.longitude) {
                    setZoom(18);
                    setMyPosition({ latitude: currentLocation.latitude, longitude: currentLocation.longitude });
                }
            } else {
                setZoom(18);
                setMyPosition({ latitude: 37.564362, longitude: 126.977011 });
            }
        });
    };

    //  처음 Location페이지로 이동시 권한 획득 , ReverseGeolocation 호출
    useEffect(() => {
        let watch = -1;
        GetLocationAuthorization().then(result => {
            if (result === 'granted') {
                watch = GetCurrentLocation();
            }
        });

        return () => {
            if (watch === 0) {
                Geolocation.clearWatch(watch);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ResetLocationButtonContainer>
            <ResetLocation onPress={onPressResetLocation}>
                <ResetLocationIcon width={44} height={44} />
            </ResetLocation>
        </ResetLocationButtonContainer>
    );
}
