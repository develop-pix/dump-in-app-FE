import { useNavigation } from '@react-navigation/native';

import LocationDarkIcon from 'assets/image/icon/location_dark.svg';
import { BranchListProps } from 'interfaces/Location.interface';
import { LocationStackScreenProps } from 'interfaces/Navigation.interface';
import {
    BranchDistanceWrapper,
    BranchListContainer,
    BranchNameWrapper,
    LocationDarkIconContainer,
    LocationInfo,
} from 'styles/layout/location-search/Location.style';
import { FontLightGreySmallerMedium, FontWhiteGreyNormalMedium } from 'styles/layout/reuse/text/Text.style';

export default function BranchList({ branchName, distance, branchID }: BranchListProps) {
    const navigation = useNavigation<LocationStackScreenProps<'LocationSearch'>['navigation']>();
    const onSelectLocation = () => {
        navigation.navigate('MainTab', {
            screen: 'LocationTab',
            params: { screen: 'Branch', params: { branchID } },
        });
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
                    {distance && <FontLightGreySmallerMedium>{distance}</FontLightGreySmallerMedium>}
                </BranchDistanceWrapper>
            </LocationInfo>
        </BranchListContainer>
    );
}
