import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import EventDetailForm from 'components/event-detail/EventDetailForm';
import GoBackButton from 'components/reuse/button/GoBackButton';
import { CategoryStackScreenProps, HomeStackScreenProps } from 'interfaces/Navigation.interface';
import { EventDetailContainer } from 'styles/layout/EventDetail.style';
import { HeaderLeftContainer } from 'styles/layout/reuse/header/Header.style';

export default function EventDetail() {
    const navigation = useNavigation<
        HomeStackScreenProps<'EventDetail'>['navigation'] | CategoryStackScreenProps<'EventDetail'>['navigation']
    >();

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
    }, []);

    return (
        <EventDetailContainer>
            <EventDetailForm />
        </EventDetailContainer>
    );
}
