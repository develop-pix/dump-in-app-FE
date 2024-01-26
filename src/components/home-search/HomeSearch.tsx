import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import GoBackButton from 'components/reuse/button/GoBackButton';
import { RootStackScreenProps } from 'interfaces/Navigation.interface';
import { HomeSearchSafeContainer } from 'styles/layout/home-search/HomeSearch.style';

import ReviewSearchInput from './input/ReviewSearchInput';

export default function HomeSearch() {
    const navigation = useNavigation<RootStackScreenProps<'HomeSearch'>['navigation']>();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return <GoBackButton />;
            },
        });
    }, [navigation]);

    return (
        <HomeSearchSafeContainer>
            <ReviewSearchInput />
        </HomeSearchSafeContainer>
    );
}
