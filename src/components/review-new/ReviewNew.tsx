import React, {useEffect, useRef, useState} from 'react';
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
import CameraShotSelect from './input/CameraShotSelect';
import GoBackButtonReview from '../reuse/button/GoBackButtonReview';
import {InputDatas} from '../../interfaces/ReviewNew.interface';

export default function ReviewNew() {
  const [errorData, setErrorData] = useState<InputDatas[]>([]);
  const scrollRef = useRef<any>();
  const platform = Platform.OS;
  const representaiveImage = useAppSelector(
    state => state.reviewData,
  ).representativeImage;
  const description = useAppSelector(state => state.reviewData).description;
  const location = useAppSelector(state => state.reviewData).branchID;
  const date = useAppSelector(state => state.reviewData).date;
  const frameColor = useAppSelector(state => state.reviewData).frameColor;
  const party = useAppSelector(state => state.reviewData).party;
  const cameraShot = useAppSelector(state => state.reviewData).cameraShot;
  const hashtags = useAppSelector(state => state.reviewData).hashtag;
  const tools = useAppSelector(state => state.reviewData).tools;
  const hairIron = useAppSelector(state => state.reviewData).hairIron;
  const publicOpen = useAppSelector(state => state.reviewData).publicOpen;

  //
  const onErrorScroll = (height: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({y: height, animated: true});
    }
  };

  const onPressSubmit = () => {
    // 기존에 있던 errorData(빈항목) 초기화
    setErrorData([]);

    // 각각의 Input요소가 빈 항목일 경우 errorData에 추가
    if (description === null || description === '') {
      setErrorData(data => [...data, {InputName: 'description', height: 450}]);
    }
    if (location === null || location === undefined) {
      setErrorData(data => [...data, {InputName: 'location', height: 570}]);
    }
    if (date === null) {
      setErrorData(data => [...data, {InputName: 'date', height: 570}]);
    }
    if (frameColor === null) {
      setErrorData(data => [...data, {InputName: 'frameColor', height: 680}]);
    }
    if (party === null) {
      setErrorData(data => [...data, {InputName: 'party', height: 880}]);
    }
    if (cameraShot === null) {
      setErrorData(data => [...data, {InputName: 'cameraShot', height: 880}]);
    }
    if (hashtags.length === 0) {
      setErrorData(data => [...data, {InputName: 'hashtags', height: 880}]);
    }

    // errorData 중 제일 상단 항목으로 이동
    if (errorData.length > 0) {
      onErrorScroll(errorData[0].height);
    }

    if (errorData.length === 0) {
      //더이상 에러 데이터가 없을경우 submit 진행, 추후 API추가
    }
  };

  useEffect(() => {
    if (errorData[0]) {
      onErrorScroll(errorData[0].height);
    }
  }, [errorData]);

  return (
    <ReviewNewScrollView ref={scrollRef}>
      <GoBackButtonWithSubmitContainer platform={platform}>
        <GoBackButtonReview />
        <SubmitButton onPress={onPressSubmit}>
          <FontYellowBiggerThick>완료</FontYellowBiggerThick>
        </SubmitButton>
      </GoBackButtonWithSubmitContainer>
      <ImageFileInput representaiveImage={representaiveImage} />
      <InputContainer>
        <InputWrapper>
          <ReviewDescriptionInput
            description={description}
            errorData={errorData}
          />
          <LocationAndDateContainer>
            <LocationInput location={location} errorData={errorData} />
            <Dateinput date={date} errorData={errorData} />
          </LocationAndDateContainer>
          <FrameColorSelect frameColor={frameColor} errorData={errorData} />
          <PartySelect party={party} errorData={errorData} />
          <CameraShotSelect cameraShot={cameraShot} errorData={errorData} />
          <HashtagSelect hashtags={hashtags} errorData={errorData} />
          <EquipmentContainer>
            <ToolsSelect tools={tools} />
            <HairIronSelect hairIron={hairIron} />
          </EquipmentContainer>
          <PublicOpenSwitch publicOpen={publicOpen} />
        </InputWrapper>
      </InputContainer>
    </ReviewNewScrollView>
  );
}
