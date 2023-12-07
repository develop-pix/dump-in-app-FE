import React from 'react';
import {
  EquipmentContainer,
  InputContainer,
  InputWrapper,
  LocationAndDateContainer,
  ReviewNewScrollView,
} from '../../styles/layout/review-new/ReviewNew.style';
import {
  GoBackButtonWithSubmitContainer,
  SubmitButton,
} from '../../styles/layout/reuse/button/GoBackButton.style';
import {Platform} from 'react-native';
import GoBackButton from '../reuse/button/GoBackButton';
import {FontYellowBiggerThick} from '../../styles/layout/reuse/text/Text.style';
import ImageFileInput from './input/ImageFileInput';
import ReviewDescriptionInput from './input/ReviewDescriptionInput';
import LocationInput from './input/LocationInput';
import Dateinput from './input/Dateinput';
import {useAppSelector} from '../../hooks/redux/store';
import FrameColorSelect from './input/FrameColorSelect';
import PartySelect from './input/PartySelect';
import HashtagSelect from './input/HashtagSelect';
import ToolsSelect from './input/ToolsSelect';
import HairIronSelect from './input/HairIronSelect';
import PublicOpenSwitch from './input/PublicOpenSwitch';

export default function ReviewNew() {
  const platform = Platform.OS;
  const description = useAppSelector(state => state.reviewData).description;
  const party = useAppSelector(state => state.reviewData).party;
  const hashtag = useAppSelector(state => state.reviewData).hashtag;
  const tools = useAppSelector(state => state.reviewData).tools;
  const hairIron = useAppSelector(state => state.reviewData).hairIron;

  const onPressSubmit = () => {
    //제출 우선 리뷰 제출만 작성
    console.log(description);
    console.log(party);
    console.log(hashtag);
    console.log(tools);
    console.log(hairIron);
  };
  return (
    <ReviewNewScrollView>
      <GoBackButtonWithSubmitContainer platform={platform}>
        <GoBackButton />
        <SubmitButton onPress={onPressSubmit}>
          <FontYellowBiggerThick>완료</FontYellowBiggerThick>
        </SubmitButton>
      </GoBackButtonWithSubmitContainer>
      <ImageFileInput />
      <InputContainer>
        <InputWrapper>
          <ReviewDescriptionInput />
          <LocationAndDateContainer>
            <LocationInput />
            <Dateinput />
          </LocationAndDateContainer>
          <FrameColorSelect />
          <PartySelect />
          <HashtagSelect />
          <EquipmentContainer>
            <ToolsSelect />
            <HairIronSelect />
          </EquipmentContainer>
          <PublicOpenSwitch />
        </InputWrapper>
      </InputContainer>
    </ReviewNewScrollView>
  );
}
