import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import GoBackButton from 'components/reuse/button/GoBackButton';
import { RootStackScreenProps } from 'interfaces/Navigation.interface';
import { HomeSearchSafeContainer } from 'styles/layout/home-search/HomeSearch.style';
import { HeaderLeftContainer } from 'styles/layout/reuse/header/Header.style';

import ReviewSearchInput from './input/ReviewSearchInput';

export default function HomeSearch() {
    const navigation = useNavigation<RootStackScreenProps<'HomeSearch'>['navigation']>();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <HeaderLeftContainer>
                        <GoBackButton />
                    </HeaderLeftContainer>
                );
            },
        });
    }, [navigation]);

    return (
        <HomeSearchSafeContainer>
            <ReviewSearchInput />
        </HomeSearchSafeContainer>
    );
}
