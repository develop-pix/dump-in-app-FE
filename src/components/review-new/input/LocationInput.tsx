import React, {useEffect} from 'react';
import {
  ReviewErrorContainer,
  ReviewInputTitleContainer,
} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontLightGreyNormalMedium,
  FontRedNormalMedium,
  FontWhiteNormalMedium,
  FontYellowSmallestMedium,
} from '../../../styles/layout/reuse/text/Text.style';
import {
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
import LocationGreyIcon from '../../../assets/image/icon/location_grey.svg';
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
      navigation.push('LocationSearch', {
        NextPage: 'ReviewNew',
        screen: 'Location',
      });
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
        <FontWhiteNormalMedium>위치</FontWhiteNormalMedium>
        <FontRedNormalMedium>*</FontRedNormalMedium>
        {errorData.map(data => {
          return data.InputName === 'location' ? (
            <ReviewErrorContainer key={data.InputName}>
              <FontYellowSmallestMedium>
                필수 입력 항목입니다.
              </FontYellowSmallestMedium>
            </ReviewErrorContainer>
          ) : null;
        })}
      </ReviewInputTitleContainer>
      <LocationInputButton onPress={onPressSelectLocation} activeOpacity={1}>
        <LocationTextButton onPress={onPressSelectLocation}>
          {location === undefined || null ? (
            <FontLightGreyNormalMedium>
              위치를 검색해주세요.
            </FontLightGreyNormalMedium>
          ) : (
            <LocationTextContainer>
              <LocationGreyIcon width={16} height={21} />
              <FontWhiteNormalMedium>{location}</FontWhiteNormalMedium>
            </LocationTextContainer>
          )}
        </LocationTextButton>
      </LocationInputButton>
    </LocationInputContainer>
  );
}
