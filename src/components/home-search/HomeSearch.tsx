import { Platform } from 'react-native';

import GoBackButton from 'components/reuse/button/GoBackButton';
import { HomeSearchSafeContainer } from 'styles/layout/home-search/HomeSearch.style';
import { GoBackButtonContainerWithSafeArea } from 'styles/layout/reuse/button/GoBackButton.style';

import ReviewSearchInput from './input/ReviewSearchInput';

export default function HomeSearch() {
    const platform = Platform.OS;

    return (
        <HomeSearchSafeContainer>
            <GoBackButtonContainerWithSafeArea platform={platform}>
                <GoBackButton />
            </GoBackButtonContainerWithSafeArea>

            <ReviewSearchInput />
        </HomeSearchSafeContainer>
    );
}
