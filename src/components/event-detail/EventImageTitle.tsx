import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
import ConfirmationAlertModal from 'components/reuse/modal/ConfirmationAlertModal';
import { LikeEvent } from 'hooks/axios/Event';
import { useAppSelector } from 'hooks/redux/store';
import { EventImageTitleProps } from 'interfaces/EventDetail.interface';
import { CategoryStackScreenProps, RootStackScreenProps } from 'interfaces/Navigation.interface';
import { colors } from 'styles/base/Variable';
import {
    ContentsContainer,
    EventImage,
    EventImageContentContainer,
    EventImageTitleContainer,
    TitleContainer,
} from 'styles/layout/event-detail/EventImageTitle.style';
import { FontWhiteBiggestSemibold, FontYellowSmallerMediumWithLineSpacing } from 'styles/layout/reuse/text/Text.style';
import { ReviewDescBottom } from 'styles/layout/review-detail/ReviewDetail.style';
import { TagsArrayToHashTagArrayForm } from 'utils/FormChange';

export default function ImageTitle({ mainThumbnailImageUrl, title, hashtag, isLiked }: EventImageTitleProps) {
    const route = useRoute<CategoryStackScreenProps<'EventDetail'>['route']>();
    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;
    const navigation = useNavigation<RootStackScreenProps<'MainTab'>['navigation']>();

    const [favorite, setFavorite] = useState(isLiked);
    const [isModalVisible, setIsModalVisible] = useState(false);

    /** 하트 버튼 클릭시 */
    const onPressEventLikeButton = async () => {
        if (isLoggedIn) {
            const press_result = await LikeEvent(route.params.eventID);
            if (press_result.success) {
                setFavorite(prev => !prev);
            }
        } else {
            setIsModalVisible(prev => !prev);
        }
    };

    /** 로그인 버튼 클릭시 */
    const onPressLogin = () => {
        setIsModalVisible(prev => !prev);
        navigation.navigate('Login');
    };

    return (
        <EventImageTitleContainer>
            <EventImage source={{ uri: mainThumbnailImageUrl }}>
                <LinearGradient
                    colors={['transparent', colors.lightblack]}
                    locations={[0.1, 0.7]}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 200,
                    }}
                />
            </EventImage>

            <EventImageContentContainer>
                <ContentsContainer>
                    <TitleContainer>
                        <FontWhiteBiggestSemibold>{title}</FontWhiteBiggestSemibold>
                        <FavoriteButton favorite={favorite} onPress={onPressEventLikeButton} />
                    </TitleContainer>

                    <ReviewDescBottom>
                        {TagsArrayToHashTagArrayForm(hashtag).map(tag => (
                            <FontYellowSmallerMediumWithLineSpacing key={tag}>
                                {tag}
                            </FontYellowSmallerMediumWithLineSpacing>
                        ))}
                    </ReviewDescBottom>
                </ContentsContainer>
            </EventImageContentContainer>
            <ConfirmationAlertModal
                isVisible={isModalVisible}
                title="로그인이 필요합니다.  로그인 하시겠습니까?"
                agreeMessage="확인"
                disagreeMessage="취소"
                onAgree={onPressLogin}
                onDisagree={() => setIsModalVisible(false)}
            />
        </EventImageTitleContainer>
    );
}
