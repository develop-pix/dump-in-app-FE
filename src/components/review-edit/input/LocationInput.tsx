import { useEffect } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import LocationGreyIcon from 'assets/image/icon/location_grey.svg';
import { GetBranchData } from 'hooks/axios/Branch';
import { useAppDispatch, useAppSelector } from 'hooks/redux/store';
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

export default function LocationInput({ branchName, setBranchName, errorData }: LocationInputProps) {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const dispatch = useAppDispatch();
    const branchID = useAppSelector(state => state.branchReviewEdit).branchID;

    // Branch 검색 페이지로 이동
    const onPressSelectLocation = () => {
        if (isFocused) {
            navigation.navigate('LocationSearch');
        }
    };

    // 페이지 진입시 브랜치 이름 (branch 이름으로 Get)
    useEffect(() => {
        const GetBranchNameData = async () => {
            try {
                let branchFullName = '';
                //FIXME: 백엔드 데이터 바뀔시 수정필요(위도,경도 필요없도록 수정예정)
                if (branchID) {
                    const branchData = await GetBranchData(36.8101475281, 127.1470316068, branchID);
                    branchFullName = branchData.data.photoBoothBrand.name + ' ' + branchData.data.name;
                    return branchFullName;
                }
            } catch (e) {
                console.log(e);
            }
        };
        const fetchBranchName = async () => {
            const response = await GetBranchNameData();
            if (response) {
                setBranchName(response);
            }
        };
        fetchBranchName();
    }, [branchID, dispatch, setBranchName]);

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
