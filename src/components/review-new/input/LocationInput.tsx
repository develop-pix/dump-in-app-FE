import { useEffect } from 'react';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';

import LocationGreyIcon from 'assets/image/icon/location_grey.svg';
import { setBranchID } from 'hooks/redux/ReviewData';
import { useAppDispatch } from 'hooks/redux/store';
import { RootStackScreenProps } from 'interfaces/Navigation.interface';
import { LocationInputProps } from 'interfaces/ReviewNew.interface';
import {
    FontLightGreyNormalMedium,
    FontRedNormalMedium,
    FontWhiteNormalMedium,
    FontWhiteSmallerMediumWithLineHeight,
    FontYellowSmallestMedium,
} from 'styles/layout/reuse/text/Text.style';
import {
    LocationInputButton,
    LocationInputContainer,
    LocationTextContainer,
} from 'styles/layout/review-form/input/LocationInput.style';
import { ReviewErrorContainer, ReviewInputTitleContainer } from 'styles/layout/review-form/ReviewForm.style';

export default function LocationInput({ location, errorData }: LocationInputProps) {
    const navigation = useNavigation();
    const route = useRoute<RootStackScreenProps<'AddReviewModal'>['route']>();
    const isFocused = useIsFocused();
    const dispatch = useAppDispatch();

    // Branch 검색 페이지로 이동
    const onPressSelectLocation = () => {
        if (isFocused) {
            navigation.navigate('LocationSearch');
        }
    };

    // 페이지 진입시 params로 위치정보 dispatch
    useEffect(() => {
        dispatch(setBranchID(route.params.branchID));
        // BranchID로 photoBoothName + branchName 얻어오는 API 추가
    }, [dispatch, route.params.branchID]);

    return (
        <LocationInputContainer>
            <ReviewInputTitleContainer>
                <FontWhiteNormalMedium>위치</FontWhiteNormalMedium>
                <FontRedNormalMedium>*</FontRedNormalMedium>
                {errorData.map(data => {
                    return data.InputName === 'location' ? (
                        <ReviewErrorContainer key={data.InputName}>
                            <FontYellowSmallestMedium>필수 입력 항목입니다.</FontYellowSmallestMedium>
                        </ReviewErrorContainer>
                    ) : null;
                })}
            </ReviewInputTitleContainer>
            <LocationInputButton onPress={onPressSelectLocation} activeOpacity={1}>
                <FontWhiteSmallerMediumWithLineHeight onPress={onPressSelectLocation}>
                    {location === undefined || null ? (
                        <FontLightGreyNormalMedium>위치를 검색해주세요.</FontLightGreyNormalMedium>
                    ) : (
                        <LocationTextContainer>
                            <LocationGreyIcon width={16} height={21} />
                            <FontWhiteNormalMedium>{location}</FontWhiteNormalMedium>
                        </LocationTextContainer>
                    )}
                </FontWhiteSmallerMediumWithLineHeight>
            </LocationInputButton>
        </LocationInputContainer>
    );
}
