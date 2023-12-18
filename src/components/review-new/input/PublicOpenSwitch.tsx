import React from 'react';
import {
  PublciOpenSwitchContainer,
  PublicOpenToggle,
} from '../../../styles/layout/review-new/input/PublicOpenSwitch.style';
import {ReviewInputTitleContainer} from '../../../styles/layout/review-new/ReviewNew.style';
import {FontWhiteNormalMedium} from '../../../styles/layout/reuse/text/Text.style';
import {useAppDispatch} from '../../../hooks/redux/store';
import {setPublicOpen} from '../../../hooks/redux/ReviewData';
import {colors} from '../../../styles/base/Variable';
import {PublicOpenSwitchProps} from '../../../interfaces/ReviewNew.interface';

export default function PublicOpenSwitch({publicOpen}: PublicOpenSwitchProps) {
  const dispatch = useAppDispatch();

  const onToggleSwitch = () => {
    dispatch(setPublicOpen(!publicOpen));
  };
  return (
    <PublciOpenSwitchContainer>
      <ReviewInputTitleContainer>
        <FontWhiteNormalMedium>공개허용</FontWhiteNormalMedium>
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
