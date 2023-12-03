import React from 'react';
import {
  ResetLocation,
  ResetLocationButtonContainer,
  ResetLocationImage,
} from '../../../styles/layout/location/Map.style';
import ResetLocationIcon from '../../../assets/image/map/btn_reset.png';
import {ResetLocationButtonProps} from '../../../interfaces/Location.interface';

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
