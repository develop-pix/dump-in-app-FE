import { useIsFocused, useNavigation } from '@react-navigation/native';

import LocationGreyIcon from 'assets/image/icon/location_grey.svg';
import { useAppSelector } from 'hooks/redux/store';
import { LocationInputProps } from 'interfaces/ReviewEdit.interface';
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

export default function LocationInput({ errorData }: LocationInputProps) {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const branchName = useAppSelector(state => state.reviewEdit).branchName;

    // Branch 검색 페이지로 이동
    const onPressSelectLocation = () => {
        if (isFocused) {
            navigation.navigate('LocationSearch');
        }
    };

    return (
        <LocationInputContainer>
            <ReviewInputTitleContainer>
                <FontWhiteNormalMedium>위치</FontWhiteNormalMedium>
                <FontRedNormalMedium>*</FontRedNormalMedium>
                {errorData.map(data => {
                    return data.InputName === 'branchID' ? (
                        <ReviewErrorContainer key={data.InputName}>
                            <FontYellowSmallestMedium>필수 입력 항목입니다.</FontYellowSmallestMedium>
                        </ReviewErrorContainer>
                    ) : null;
                })}
            </ReviewInputTitleContainer>
            <LocationInputButton onPress={onPressSelectLocation} activeOpacity={1}>
                <FontWhiteSmallerMediumWithLineHeight onPress={onPressSelectLocation}>
                    {branchName === undefined ? (
                        <FontLightGreyNormalMedium>위치를 검색해주세요.</FontLightGreyNormalMedium>
                    ) : (
                        <LocationTextContainer>
                            <LocationGreyIcon width={14} height={18} />
                            <FontWhiteNormalMedium>{branchName}</FontWhiteNormalMedium>
                        </LocationTextContainer>
                    )}
                </FontWhiteSmallerMediumWithLineHeight>
            </LocationInputButton>
        </LocationInputContainer>
    );
}
