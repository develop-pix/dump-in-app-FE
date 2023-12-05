import React from 'react';
import ResetLocationIcon from '../../../assets/image/map/btn_reset.png';
import {ResetLocationButtonProps} from '../../../interfaces/Location.interface';
import {
  ResetLocation,
  ResetLocationButtonContainer,
  ResetLocationImage,
} from '../../../styles/layout/location/ResetLocationButton.style';

export default function ResetLocationButton({
  myPosition,
  setPinPosition,
  setZoom,
}: ResetLocationButtonProps) {
  const onPressResetLocation = () => {
    setZoom(18);
    setPinPosition(myPosition);
  };

  return (
    <ResetLocationButtonContainer>
      <ResetLocation onPress={onPressResetLocation}>
        <ResetLocationImage source={ResetLocationIcon} />
      </ResetLocation>
    </ResetLocationButtonContainer>
  );
}
