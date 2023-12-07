import React from 'react';
import {ReviewInputTitleContainer} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontBlackSmallerThick,
  FontLightGreySmallerThin,
  FontWhiteSmallerThick,
} from '../../../styles/layout/reuse/text/Text.style';
import {
  HairIronButtonLeft,
  HairIronButtonRight,
  HairIronInputContainer,
  HairIronSelectContainer,
} from '../../../styles/layout/review-new/input/HairIronSelect.style';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux/store';
import {setHairIron} from '../../../hooks/redux/ReviewData';

export default function HairIronSelect() {
  const dispatch = useAppDispatch();
  const hairIron = useAppSelector(state => state.reviewData).hairIron;

  const onPressHairIron = () => {
    if (hairIron === true) {
      dispatch(setHairIron(null));
    } else {
      dispatch(setHairIron(true));
    }
  };
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
        <FontWhiteSmallerThick>고데기</FontWhiteSmallerThick>
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
