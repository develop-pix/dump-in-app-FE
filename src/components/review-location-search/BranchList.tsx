import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import LocationDarkIcon from 'assets/image/icon/location_dark.svg';
import { setBranchID, setBranchName } from 'hooks/redux/reviewEditSlice';
import { setBranchID as setReviewNewBranchID } from 'hooks/redux/reviewNewSlice';
import { RootStackScreenProps } from 'interfaces/Navigation.interface';
import { BranchListProps } from 'interfaces/ReviewLocationSearch.interface';
import { FontWhiteGreyNormalMedium } from 'styles/layout/reuse/text/Text.style';
import {
    BranchListContainer,
    BranchNameWrapper,
    LocationInfo,
} from 'styles/layout/review-location-search/ReviewLocationSearch.style';

export default function BranchList({ name, branchID }: BranchListProps) {
    const navigation = useNavigation<RootStackScreenProps<'ReviewLocationSearch'>['navigation']>();
    const routes = navigation.getState().routes;
    const previousRouteName = routes[routes.length - 2].name;
    const dispatch = useDispatch();

    const onSelectLocation = () => {
        if (previousRouteName === 'AddReviewModal') {
            dispatch(setReviewNewBranchID(branchID));
            navigation.navigate('AddReviewModal');
        } else if (previousRouteName === 'ReviewEdit') {
            dispatch(setBranchID(branchID));
            dispatch(setBranchName(name));
            navigation.goBack();
        }
    };

    return (
        <BranchListContainer onPress={onSelectLocation}>
            <LocationDarkIcon />
            <LocationInfo>
                <BranchNameWrapper>
                    <FontWhiteGreyNormalMedium>{name}</FontWhiteGreyNormalMedium>
                </BranchNameWrapper>
            </LocationInfo>
        </BranchListContainer>
    );
}
