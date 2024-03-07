import { useNavigation } from '@react-navigation/native';

import LocationDarkIcon from 'assets/image/icon/location_dark.svg';
import { RootStackScreenProps } from 'interfaces/Navigation.interface';
import { BranchListProps } from 'interfaces/ReviewLocationSearch.interface';
import { FontWhiteGreyNormalMedium } from 'styles/layout/reuse/text/Text.style';
import {
    BranchListContainer,
    BranchNameWrapper,
    LocationDarkIconContainer,
    LocationInfo,
} from 'styles/layout/review-location-search/ReviewLocationSearch.style';

export default function BranchList({ name, branchID }: BranchListProps) {
    const navigation = useNavigation<RootStackScreenProps<'ReviewLocationSearch'>['navigation']>();
    const routes = navigation.getState().routes;
    const previousRouteName = routes[routes.length - 2].name;

    const onSelectLocation = () => {
        // FIXME: ReviewEdit 예외처리 되어있지 않음, 전체적으로 param 보다 전역 상태 관리로 하는 것이 깔끔해 보임
        // 검색된 지점 클릭, 진입한 페이지가 Map일 경우 Branch, ReviewNew or ReviewEdit일 경우 해당 페이지로 돌아감
        if (previousRouteName === 'AddReviewModal') {
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
                    <FontWhiteGreyNormalMedium>{name}</FontWhiteGreyNormalMedium>
                </BranchNameWrapper>
            </LocationInfo>
        </BranchListContainer>
    );
}
