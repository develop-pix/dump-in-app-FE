import { useNavigation } from '@react-navigation/native';

import LocationDarkIcon from 'assets/image/icon/location_dark.svg';
import { BranchListProps } from 'interfaces/Location.interface';
import { RootStackScreenProps } from 'interfaces/Navigation.interface';
import {
    BranchDistanceWrapper,
    BranchListContainer,
    BranchNameWrapper,
    LocationDarkIconContainer,
    LocationInfo,
} from 'styles/layout/location-search/Location.style';
import { FontLightGreySmallerMedium, FontWhiteGreyNormalMedium } from 'styles/layout/reuse/text/Text.style';

export default function BranchList({ branchName, distance, branchID }: BranchListProps) {
    const navigation = useNavigation<RootStackScreenProps<'LocationSearch'>['navigation']>();
    const routes = navigation.getState().routes;
    const previousRouteName = routes[routes.length - 2].name;

    // FIXME: ReviewEdit 예외처리 되어있지 않음, 전체적으로 param 보다 전역 상태 관리로 하는 것이 깔끔해 보임
    const onSelectLocation = () => {
        // 진입한 페이지가 지도 검색일 경우 BranchDetail로, ReviewNew일 경우 ReviewNew로 돌아감
        if (previousRouteName === 'MainTab') {
            navigation.navigate('MainTab', {
                screen: 'LocationTab',
                params: { screen: 'Branch', params: { branchID } },
            });
        } else if (previousRouteName === 'AddReviewModal') {
            navigation.navigate('AddReviewModal', { branchID });
        } else if (previousRouteName === 'ReviewEdit') {
            navigation.goBack();
        }
    };

    return (
        <BranchListContainer onPress={onSelectLocation}>
            <LocationDarkIconContainer>
                <LocationDarkIcon />
            </LocationDarkIconContainer>
            <LocationInfo>
                <BranchNameWrapper>
                    <FontWhiteGreyNormalMedium>{branchName}</FontWhiteGreyNormalMedium>
                </BranchNameWrapper>
                <BranchDistanceWrapper>
                    <FontLightGreySmallerMedium>{distance}</FontLightGreySmallerMedium>
                </BranchDistanceWrapper>
            </LocationInfo>
        </BranchListContainer>
    );
}
