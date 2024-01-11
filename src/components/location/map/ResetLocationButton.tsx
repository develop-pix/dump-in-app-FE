import { useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';

import ResetLocationIcon from 'assets/image/icon/btn_reset.svg';
import { useAppSelector } from 'hooks/redux/store';
import { ResetLocationButtonProps } from 'interfaces/Location.interface';
import { ResetLocation, ResetLocationButtonContainer } from 'styles/layout/location/ResetLocationButton.style';
import { GetLocationAuthorization } from 'utils/GetLocation';

export default function ResetLocationButton({ GetCurrentLocation, setMyPosition, setZoom }: ResetLocationButtonProps) {
    const currentLocation = useAppSelector(state => state.location);

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

    /**  처음 Location페이지로 이동시 권한 획득 , ReverseGeolocation 호출 */
    // TODO: 권한 거절 할시 어떻게 처리할지 고민 해야함
    useEffect(() => {
        let watch = -1;
        GetLocationAuthorization().then(result => {
            if (result === 'granted') {
                watch = GetCurrentLocation();
            }
        });

        // unmount시 위치 연결 해제
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
