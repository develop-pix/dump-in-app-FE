import ResetLocationIcon from 'assets/image/icon/btn_reset.svg';
import { ResetLocationButtonProps } from 'interfaces/Location.interface';
import { ResetLocation, ResetLocationButtonContainer } from 'styles/layout/location/ResetLocationButton.style';
import { GetLocationAuthorization } from 'utils/GetAuthorization';

export default function ResetLocationButton({ GetLocation, setZoom }: ResetLocationButtonProps) {
    const onPressResetLocation = () => {
        setZoom(18);
        GetLocationAuthorization().then(result => {
            if (result === 'granted') {
                GetLocation();
            }
            //TODO: 지도 권한 없을때 경고문 추가 할지 고민 해보아야함
        });
    };

    return (
        <ResetLocationButtonContainer>
            <ResetLocation onPress={onPressResetLocation}>
                <ResetLocationIcon width={44} height={44} />
            </ResetLocation>
        </ResetLocationButtonContainer>
    );
}
