import { useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import LocationIcon from 'assets/image/icon/location_white.svg';
import FavoriteButton from 'components/reuse/button/FavoriteButton';
import { LikeEvent } from 'hooks/axios/Event';
import { useAppSelector } from 'hooks/redux/store';
import { CategoryEventItemProps } from 'interfaces/Category.interface';
import { CategoryStackScreenProps } from 'interfaces/Navigation.interface';
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
    const navigation = useNavigation<CategoryStackScreenProps<'Category'>['navigation']>();
    const isFocused = useIsFocused();
    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;

    const [favorite, setFavorite] = useState<boolean>(eventData.isLiked);

    const onPressEvent = (id: number) => {
        if (isFocused) {
            navigation.navigate('EventDetail', { eventID: id });
        }
    };

    /** 하트 버튼 클릭시 */
    const onPressEventLikeButton = async () => {
        if (isLoggedIn) {
            const press_result = await LikeEvent(eventData.id);
            if (press_result.success) {
                setFavorite(prev => !prev);
            }
        }
    };

    return (
        <EventItemContainer key={eventData.id} onPress={() => onPressEvent(eventData.id)}>
            <EventImageWrapper>
                <EventImage source={{ uri: eventData.mainThumbnailImageUrl }} />
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
                    <FavoriteButton favorite={favorite} onPress={onPressEventLikeButton} />
                </FavoriteIcon>

                <EventInfo>
                    <PhotoBoothNameContainer>
                        <LocationIconContainer>
                            <LocationIcon width={18} height={21} />
                        </LocationIconContainer>
                        <FontWhiteSmallerMedium>{eventData.photoBoothBrandName}</FontWhiteSmallerMedium>
                    </PhotoBoothNameContainer>
                    <EventTitleContainer>
                        <FontWhiteBiggestSemibold>{eventData.title}</FontWhiteBiggestSemibold>
                    </EventTitleContainer>
                    <FontWhiteGreySmallerMedium>
                        {eventData.startDate + ' ~ ' + eventData.endDate}
                    </FontWhiteGreySmallerMedium>
                </EventInfo>
            </EventImageWrapper>
        </EventItemContainer>
    );
}
