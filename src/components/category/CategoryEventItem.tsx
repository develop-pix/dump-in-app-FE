import { useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import LocationIcon from 'assets/image/icon/location_white.svg';
import FavoriteButton from 'components/reuse/button/FavoriteButton';
import { CategoryEventItemProps } from 'interfaces/Category.interface';
import { RootStackParam } from 'interfaces/NavigationBar';
import { colors } from 'styles/base/Variable';
import {
    EventImage,
    EventImageWrapper,
    EventInfo,
    EventItemContainer,
    EventTitleContainer,
    FavoriteIcon,
    LocationIconContainer,
    PhotoBoothNameContainer,
} from 'styles/layout/category/CategoryEventItem.style';
import {
    FontWhiteBiggestSemibold,
    FontWhiteGreySmallerMedium,
    FontWhiteSmallerMedium,
} from 'styles/layout/reuse/text/Text.style';

export default function CategoryEventItem({ eventData }: CategoryEventItemProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const isFocused = useIsFocused();

    const onPressEvent = (id: number) => {
        if (isFocused) {
            navigation.navigate('EventDetail', { eventID: id });
        }
    };

    const [favorite, setFavorite] = useState<boolean>(eventData.myEvent);

    return (
        <EventItemContainer key={eventData.eventID} onPress={() => onPressEvent(eventData.eventID)}>
            <EventImageWrapper>
                <EventImage source={{ uri: eventData.representativeImage }} />
                <LinearGradient
                    colors={['transparent', colors.lightblack]}
                    locations={[0.1, 1]}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 400,
                    }}
                />

                <FavoriteIcon>
                    <FavoriteButton favorite={favorite} setFavorite={setFavorite} />
                </FavoriteIcon>

                <EventInfo>
                    <PhotoBoothNameContainer>
                        <LocationIconContainer>
                            <LocationIcon width={18} height={21} />
                        </LocationIconContainer>
                        <FontWhiteSmallerMedium>{eventData.photoBoothName}</FontWhiteSmallerMedium>
                    </PhotoBoothNameContainer>
                    <EventTitleContainer>
                        <FontWhiteBiggestSemibold>{eventData.eventTitle}</FontWhiteBiggestSemibold>
                    </EventTitleContainer>
                    <FontWhiteGreySmallerMedium>
                        {eventData.startDate + ' ~ ' + eventData.endDate}
                    </FontWhiteGreySmallerMedium>
                </EventInfo>
            </EventImageWrapper>
        </EventItemContainer>
    );
}
