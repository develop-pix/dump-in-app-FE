import React from 'react';
import {ReviewInputTitleContainer} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontBlackSmallerThick,
  FontLightGreySmallerThin,
  FontRedSmallerThickWithLineHeight,
  FontWhiteSmallerThick,
} from '../../../styles/layout/reuse/text/Text.style';
import {
  PartyButton,
  PartySelectContainer,
  PartySelectWrapper,
} from '../../../styles/layout/review-new/input/PartySelect.style';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux/store';
import {setParty} from '../../../hooks/redux/ReviewData';

export default function PartySelect() {
  const availableParty: number[] = [1, 2, 3, 4, 5];
  const dispatch = useAppDispatch();
  const party = useAppSelector(state => state.reviewData).party;
  const onPressParty = (partyNumber: number) => {
    if (party === partyNumber) {
      dispatch(setParty(null));
    } else {
      dispatch(setParty(partyNumber));
    }
  };

  return (
    <PartySelectContainer>
      <ReviewInputTitleContainer>
        <FontWhiteSmallerThick>인원</FontWhiteSmallerThick>
        <FontRedSmallerThickWithLineHeight>*</FontRedSmallerThickWithLineHeight>
      </ReviewInputTitleContainer>
      <PartySelectWrapper>
        {availableParty.map((partyOption: number) => {
          return (
            <PartyButton
              partyOption={partyOption}
              isSelected={party}
              key={partyOption}
              onPress={() => onPressParty(partyOption)}>
              {partyOption === party ? (
                <FontBlackSmallerThick>
                  {partyOption === 5 ? '5+' : partyOption}
                </FontBlackSmallerThick>
              ) : (
                <FontLightGreySmallerThin>
                  {partyOption === 5 ? '5+' : partyOption}
                </FontLightGreySmallerThin>
              )}
            </PartyButton>
          );
        })}
      </PartySelectWrapper>
    </PartySelectContainer>
  );
}
