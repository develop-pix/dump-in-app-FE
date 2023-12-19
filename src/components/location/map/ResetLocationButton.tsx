import React from 'react';
import ResetLocationIcon from '../../../assets/image/icon/btn_reset.svg';
import {ResetLocationButtonProps} from '../../../interfaces/Location.interface';
import {
  ResetLocation,
  ResetLocationButtonContainer,
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
        <ResetLocationIcon width={44} height={44} />
      </ResetLocation>
    </ResetLocationButtonContainer>
  );
}
