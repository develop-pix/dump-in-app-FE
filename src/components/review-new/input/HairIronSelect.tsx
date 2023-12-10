import React from 'react';
import {ReviewInputTitleContainer} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontBlackSmallerThick,
  FontLightGreySmallerThin,
  FontWhiteNormalThin,
} from '../../../styles/layout/reuse/text/Text.style';
import {
  HairIronButtonLeft,
  HairIronButtonRight,
  HairIronInputContainer,
  HairIronSelectContainer,
} from '../../../styles/layout/review-new/input/HairIronSelect.style';
import {useAppDispatch} from '../../../hooks/redux/store';
import {setHairIron} from '../../../hooks/redux/ReviewData';
import {HairIronSelectProps} from '../../../interfaces/ReviewNew.interface';

export default function HairIronSelect({hairIron}: HairIronSelectProps) {
  const dispatch = useAppDispatch();

  // 있음 버튼 선택시 dispatch
  const onPressHairIron = () => {
    if (hairIron === true) {
      dispatch(setHairIron(null));
    } else {
      dispatch(setHairIron(true));
    }
  };

  // 없음 버튼 선택시 dispatch
  const onPressNoHairIron = () => {
    if (hairIron === false) {
      dispatch(setHairIron(null));
    } else {
      dispatch(setHairIron(false));
    }
  };

  return (
    <HairIronSelectContainer>
      <ReviewInputTitleContainer>
        <FontWhiteNormalThin>고데기</FontWhiteNormalThin>
      </ReviewInputTitleContainer>
      <HairIronInputContainer>
        {hairIron === true ? (
          <HairIronButtonLeft onPress={onPressHairIron} toolsOption={hairIron}>
            <FontBlackSmallerThick>있음</FontBlackSmallerThick>
          </HairIronButtonLeft>
        ) : (
          <HairIronButtonLeft onPress={onPressHairIron} toolsOption={hairIron}>
            <FontLightGreySmallerThin>있음</FontLightGreySmallerThin>
          </HairIronButtonLeft>
        )}
        {hairIron === false ? (
          <HairIronButtonRight
            onPress={onPressNoHairIron}
            toolsOption={hairIron}>
            <FontBlackSmallerThick>없음</FontBlackSmallerThick>
          </HairIronButtonRight>
        ) : (
          <HairIronButtonRight
            onPress={onPressNoHairIron}
            toolsOption={hairIron}>
            <FontLightGreySmallerThin>없음</FontLightGreySmallerThin>
          </HairIronButtonRight>
        )}
      </HairIronInputContainer>
    </HairIronSelectContainer>
  );
}
