import { useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
import { LikeEvent } from 'hooks/axios/Event';
import { useAppSelector } from 'hooks/redux/store';
import { CategoryStackScreenProps, HomeStackScreenProps } from 'interfaces/Navigation.interface';
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
    const navigation = useNavigation<
        | HomeStackScreenProps<'PhotoBoothDetail'>['navigation']
        | CategoryStackScreenProps<'PhotoBoothDetail'>['navigation']
    >();
    const isFocused = useIsFocused();
    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;

    const [favorite, setFavorite] = useState<boolean>(event.isLiked);

    /** EventDetail 페이지로 이동 */
    const onPressEvent = (id: number) => {
        if (isFocused) {
            switch (navigation.getId()) {
                case 'HomeStack':
                    (navigation as HomeStackScreenProps<'PhotoBoothDetail'>['navigation']).navigate('EventDetail', {
                        eventID: id,
                    });
                    break;
                case 'CategoryStack':
                    (navigation as CategoryStackScreenProps<'PhotoBoothDetail'>['navigation']).navigate('EventDetail', {
                        eventID: id,
                    });
                    break;
            }
        }
    };

    /** 하트 버튼 클릭시 */
    const onPressEventLikeButton = async () => {
        if (isLoggedIn) {
            const press_result = await LikeEvent(event.id);
            if (press_result.success) {
                setFavorite(prev => !prev);
            }
        }
    };

    return (
        <EventItem key={event.id} onPress={() => onPressEvent(event.id)}>
            <EventImageWrapper>
                <EventImage source={{ uri: event.mainThumbnailImageUrl }} />
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
                    <FavoriteButton favorite={favorite} onPress={onPressEventLikeButton} />
                </FavoriteIcon>

                <EventInfo>
                    <EventTitleContainer>
                        <FontWhiteBiggestSemibold>{event.title}</FontWhiteBiggestSemibold>
                    </EventTitleContainer>
                    <FontWhiteGreySmallerMedium>{`${event.startDate} ~ ${event.endDate}`}</FontWhiteGreySmallerMedium>
                </EventInfo>
            </EventImageWrapper>
        </EventItem>
    );
}
