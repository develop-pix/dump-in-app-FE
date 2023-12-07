import React from 'react';
import {
  PublciOpenSwitchContainer,
  PublicOpenToggle,
} from '../../../styles/layout/review-new/input/PublicOpenSwitch.style';
import {ReviewInputTitleContainer} from '../../../styles/layout/review-new/ReviewNew.style';
import {FontWhiteSmallerThick} from '../../../styles/layout/reuse/text/Text.style';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux/store';
import {setPublicOpen} from '../../../hooks/redux/ReviewData';
import {colors} from '../../../styles/base/Variable';

export default function PublicOpenSwitch() {
  const dispatch = useAppDispatch();
  const publicOpen = useAppSelector(state => state.reviewData).publicOpen;

  const onToggleSwitch = () => {
    dispatch(setPublicOpen(!publicOpen));
  };
  return (
    <PublciOpenSwitchContainer>
      <ReviewInputTitleContainer>
        <FontWhiteSmallerThick>공개허용</FontWhiteSmallerThick>
      </ReviewInputTitleContainer>
      <PublicOpenToggle
        trackColor={{false: colors.lightgrey, true: colors.yellow}}
        thumbColor={publicOpen ? colors.lightblack : colors.darkgrey}
        ios_backgroundColor={colors.lightgrey}
        onValueChange={onToggleSwitch}
        value={publicOpen}
      />
    </PublciOpenSwitchContainer>
  );
}
