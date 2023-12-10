import React, {useEffect} from 'react';
import {
  ReviewErrorContainer,
  ReviewInputTitleContainer,
} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontLightGreyNormalThin,
  FontRedNormalThin,
  FontWhiteNormalThin,
  FontYellowSmallestThin,
} from '../../../styles/layout/reuse/text/Text.style';
import {
  LocationImage,
  LocationInputButton,
  LocationInputContainer,
  LocationTextButton,
  LocationTextContainer,
} from '../../../styles/layout/review-new/input/LocationInput.style';

import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  NewReviewParamList,
  RootStackParam,
} from '../../../interfaces/NavigationBar';
import {useAppDispatch} from '../../../hooks/redux/store';
import {setBranchID} from '../../../hooks/redux/ReviewData';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LocationIcon from '../../../assets/image/reuse/location.png';
import {LocationInputProps} from '../../../interfaces/ReviewNew.interface';
export default function LocationInput({
  location,
  errorData,
}: LocationInputProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const route = useRoute<RouteProp<NewReviewParamList, 'branchType'>>();
  const isFocused = useIsFocused();
  const dispatch = useAppDispatch();

  // Branch 검색 페이지로 이동
  const onPressSelectLocation = () => {
    if (isFocused) {
      navigation.push('LocationSearch', {NextPage: 'ReviewNew'});
    }
  };

  //페이지 진입시 params로 위치정보 dispatch
  useEffect(() => {
    dispatch(setBranchID(route.params.branchID));
    // BranchID로 photoboothName + branchName 얻어오는 API 추가
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LocationInputContainer>
      <ReviewInputTitleContainer>
        <FontWhiteNormalThin>위치</FontWhiteNormalThin>
        <FontRedNormalThin>*</FontRedNormalThin>
        {errorData.map(data => {
          return data.InputName === 'location' ? (
            <ReviewErrorContainer key={data.InputName}>
              <FontYellowSmallestThin>
                필수 입력 항목입니다.
              </FontYellowSmallestThin>
            </ReviewErrorContainer>
          ) : null;
        })}
      </ReviewInputTitleContainer>
      <LocationInputButton onPress={onPressSelectLocation} activeOpacity={1}>
        <LocationTextButton onPress={onPressSelectLocation}>
          {location === undefined || null ? (
            <FontLightGreyNormalThin>
              위치를 검색해주세요.
            </FontLightGreyNormalThin>
          ) : (
            <LocationTextContainer>
              <LocationImage source={LocationIcon} />
              <FontWhiteNormalThin>{location}</FontWhiteNormalThin>
            </LocationTextContainer>
          )}
        </LocationTextButton>
      </LocationInputButton>
    </LocationInputContainer>
  );
}
