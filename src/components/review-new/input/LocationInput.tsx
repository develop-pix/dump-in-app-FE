import React, {useEffect} from 'react';
import {ReviewInputTitleContainer} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontRedSmallerThickWithLineHeight,
  FontWhiteSmallerThick,
} from '../../../styles/layout/reuse/text/Text.style';
import {
  LocationInputButton,
  LocationInputContainer,
  LocationTextInput,
} from '../../../styles/layout/review-new/input/LocationInput.style';
import {colors} from '../../../styles/base/Variable';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  NewReviewParamList,
  RootStackParam,
} from '../../../interfaces/NavigationBar';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux/store';
import {setBranchID} from '../../../hooks/redux/ReviewData';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function LocationInput() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const route = useRoute<RouteProp<NewReviewParamList, 'branchType'>>();
  const dispatch = useAppDispatch();
  const location = useAppSelector(state => state.reviewData).branchID;

  // Branch 검색 페이지로 이동
  const onPressSelectLocation = () => {
    navigation.push('LocationSearch', {NextPage: 'ReviewNew'});
    console.log('sdas');
  };

  useEffect(() => {
    dispatch(setBranchID(route.params.branchID));
    // BranchID로 photoboothName + branchName 얻어오는 API 추가
    console.log(route.params.branchID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LocationInputContainer>
      <ReviewInputTitleContainer>
        <FontWhiteSmallerThick>위치</FontWhiteSmallerThick>
        <FontRedSmallerThickWithLineHeight>*</FontRedSmallerThickWithLineHeight>
      </ReviewInputTitleContainer>
      <LocationInputButton onPress={onPressSelectLocation} activeOpacity={1}>
        <LocationTextInput
          placeholder="위치를 검색해주세요."
          //임시로 branchID로 출력
          value={location?.toString()}
          placeholderTextColor={colors.lightgrey}
          editable={false}
          onPressIn={onPressSelectLocation}
        />
      </LocationInputButton>
    </LocationInputContainer>
  );
}
