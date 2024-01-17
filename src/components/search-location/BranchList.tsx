import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import LocationDarkIcon from 'assets/image/icon/location_dark.svg';
import { BranchListProps } from 'interfaces/Location.interface';
import { LocationSearchParamList, RootStackParam, ScreenName } from 'interfaces/NavigationBar';
import {
    BranchDistanceWrapper,
    BranchListContainer,
    BranchNameWrapper,
    LocationDarkIconContainer,
    LocationInfo,
} from 'styles/layout/location-search/Location.style';
import { FontLightGreySmallerMedium, FontWhiteGreyNormalMedium } from 'styles/layout/reuse/text/Text.style';

export default function BranchList({ branchName, distance, branchID }: BranchListProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

    const route = useRoute<RouteProp<LocationSearchParamList, 'locationSearchType'>>();

    /**  검색된 지점 클릭, 진입한 페이지가 Map일경우 Branch, ReviewNew or ReviewEdit일경우 해당 페이지로 돌아감 */
    //TODO: ReviewEdit에서 진입시 ReviewNew로 돌아가는것 같은데 추후 확인 필요
    const onSelectLocation = () => {
        const currentScreen = (route.params as { screen: ScreenName }).screen;
        if (route.params.NextPage === 'BranchDetail') {
            navigation.pop();
            navigation.push('Branch', { branchID, screen: 'Location' });
        } else if (route.params.NextPage === 'ReviewNew') {
            navigation.pop();
            navigation.pop();
            navigation.push('ReviewNew', { branchID, screen: currentScreen });
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
