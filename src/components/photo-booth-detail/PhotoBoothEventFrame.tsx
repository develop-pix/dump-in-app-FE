import { useState } from 'react';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
import { RootStackParam, ScreenName } from 'interfaces/NavigationBar';
import { PhotoBoothEventFrameProps } from 'interfaces/PhotoBoothDetail.interface';
import { colors } from 'styles/base/Variable';
import {
    EventImage,
    EventImageWrapper,
    EventInfo,
    EventItem,
    EventTitleContainer,
    FavoriteIcon,
} from 'styles/layout/photo-booth-detail/PhotoBoothEventFrame.style';
import { FontWhiteBiggestSemibold, FontWhiteGreySmallerMedium } from 'styles/layout/reuse/text/Text.style';

export default function PhotoBoothEventFrame({ event }: PhotoBoothEventFrameProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const isFocused = useIsFocused();
    const route = useRoute();

    const onPressEvent = (id: number) => {
        const currentScreen = (route.params as { screen: ScreenName }).screen;
        if (isFocused) {
            navigation.push('EventDetail', { eventID: id, screen: currentScreen });
        }
    };

    const [favorite, setFavorite] = useState<boolean>(event.myEvent);

    return (
        <EventItem key={event.eventID} onPress={() => onPressEvent(event.eventID)}>
            <EventImageWrapper>
                <EventImage source={{ uri: event.representativeImage }} />
                <LinearGradient
                    colors={['transparent', colors.lightblack]}
                    locations={[0.1, 1]}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 200,
                    }}
                />

                <FavoriteIcon>
                    <FavoriteButton favorite={favorite} setFavorite={setFavorite} />
                </FavoriteIcon>

                <EventInfo>
                    <EventTitleContainer>
                        <FontWhiteBiggestSemibold>{event.eventTitle}</FontWhiteBiggestSemibold>
                    </EventTitleContainer>
                    <FontWhiteGreySmallerMedium>{`${event.startDate} ~ ${event.endDate}`}</FontWhiteGreySmallerMedium>
                </EventInfo>
            </EventImageWrapper>
        </EventItem>
    );
}
