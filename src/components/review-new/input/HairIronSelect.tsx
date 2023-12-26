import React from 'react';
import {ReviewInputTitleContainer} from '../../../styles/layout/review-form/ReviewForm.style';
import {
  FontBlackSmallerSemibold,
  FontLightGreySmallerMedium,
  FontWhiteNormalMedium,
} from '../../../styles/layout/reuse/text/Text.style';
import {
  HairIronButtonLeft,
  HairIronButtonRight,
  HairIronInputContainer,
  HairIronSelectContainer,
} from '../../../styles/layout/review-form/input/HairIronSelect.style';
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
        <FontWhiteNormalMedium>고데기</FontWhiteNormalMedium>
      </ReviewInputTitleContainer>
      <HairIronInputContainer>
        {hairIron === true ? (
          <HairIronButtonLeft onPress={onPressHairIron} toolsOption={hairIron}>
            <FontBlackSmallerSemibold>있음</FontBlackSmallerSemibold>
          </HairIronButtonLeft>
        ) : (
          <HairIronButtonLeft onPress={onPressHairIron} toolsOption={hairIron}>
            <FontLightGreySmallerMedium>있음</FontLightGreySmallerMedium>
          </HairIronButtonLeft>
        )}
        {hairIron === false ? (
          <HairIronButtonRight
            onPress={onPressNoHairIron}
            toolsOption={hairIron}>
            <FontBlackSmallerSemibold>없음</FontBlackSmallerSemibold>
          </HairIronButtonRight>
        ) : (
          <HairIronButtonRight
            onPress={onPressNoHairIron}
            toolsOption={hairIron}>
            <FontLightGreySmallerMedium>없음</FontLightGreySmallerMedium>
          </HairIronButtonRight>
        )}
      </HairIronInputContainer>
    </HairIronSelectContainer>
  );
}
