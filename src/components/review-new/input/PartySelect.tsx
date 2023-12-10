import React from 'react';
import {
  ReviewErrorContainer,
  ReviewInputTitleContainer,
} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontBlackSmallerThick,
  FontLightGreySmallerThin,
  FontRedNormalThin,
  FontWhiteNormalThin,
  FontYellowSmallestThin,
} from '../../../styles/layout/reuse/text/Text.style';
import {
  PartyButton,
  PartySelectContainer,
  PartySelectWrapper,
} from '../../../styles/layout/review-new/input/PartySelect.style';
import {useAppDispatch} from '../../../hooks/redux/store';
import {setParty} from '../../../hooks/redux/ReviewData';
import {PartySelectProps} from '../../../interfaces/ReviewNew.interface';

export default function PartySelect({party, errorData}: PartySelectProps) {
  const availableParty: number[] = [1, 2, 3, 4, 5];
  const dispatch = useAppDispatch();

  // 인원 선택시 dispatch
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
        <FontWhiteNormalThin>인원</FontWhiteNormalThin>
        <FontRedNormalThin>*</FontRedNormalThin>
        {errorData.map(data => {
          return data.InputName === 'party' ? (
            <ReviewErrorContainer key={data.InputName}>
              <FontYellowSmallestThin>
                필수 입력 항목입니다.
              </FontYellowSmallestThin>
            </ReviewErrorContainer>
          ) : null;
        })}
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
