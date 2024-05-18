import { useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import LocationGreyIcon from 'assets/image/icon/list_location.svg';
import FavoriteButton from 'components/reuse/button/FavoriteButton';
import ConfirmationAlertModal from 'components/reuse/modal/ConfirmationAlertModal';
import { LikeReview } from 'hooks/axios/Review';
import { useAppSelector } from 'hooks/redux/store';
import { ReviewFrameProps } from 'interfaces/Home.interface';
import { MyPageStackScreenProps, RootStackScreenProps } from 'interfaces/Navigation.interface';
import { colors } from 'styles/base/Variable';
import { FavoriteIcon } from 'styles/layout/category/CategoryEventItem.style';
import {
    LocationIconContainer,
    ReviewFrameContainer,
    ReviewFrameImage,
    ReviewInfo,
    ReviewNameContainer,
} from 'styles/layout/home/photo-booth-list/ReviewFrame.style';
import { FontWhiteGreySmallerMediumWithLineHeight } from 'styles/layout/reuse/text/Text.style';

export default function MyPostFrame({ data }: ReviewFrameProps) {
    const navigation = useNavigation<
        MyPageStackScreenProps<'MyPage'>['navigation'] | RootStackScreenProps<'MainTab'>['navigation']
    >();
    const isFocused = useIsFocused();
    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;

    const [favorite, setFavorite] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);

    /** 리뷰선택시 페이지 이동 */
    const onPressReview = () => {
        if (isFocused) {
            (navigation as MyPageStackScreenProps<'MyPage'>['navigation']).navigate('ReviewDetail', {
                reviewID: data.id,
                reviewType: 'like',
                photoBoothLocation: undefined,
                frameColor: undefined,
                participants: 0,
                cameraShot: undefined,
                concept: undefined,
                keyword: undefined,
                isEventReview: undefined,
            });
        }
    };

    /** 하트(좋아요) 버튼 클릭 */
    const onPressReviewLikeButton = async () => {
        if (isLoggedIn) {
            const press_result = await LikeReview(data.id);
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
        (navigation as RootStackScreenProps<'MainTab'>['navigation']).navigate('Login');
    };

    return (
        <ReviewFrameContainer activeOpacity={0.9} onPress={onPressReview}>
            <ReviewFrameImage source={{ uri: data.mainThumbnailImageUrl }} />
            <LinearGradient
                colors={['transparent', colors.lightblack]}
                locations={[0.1, 1]}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -10,
                    height: 300,
                }}
            />

            <FavoriteIcon>
                <FavoriteButton favorite={favorite} onPress={onPressReviewLikeButton} />
            </FavoriteIcon>

            <ReviewInfo>
                <ReviewNameContainer>
                    <LocationIconContainer>
                        <LocationGreyIcon width={18} height={21} />
                    </LocationIconContainer>
                    <FontWhiteGreySmallerMediumWithLineHeight>
                        {data.photoBoothName}
                    </FontWhiteGreySmallerMediumWithLineHeight>
                </ReviewNameContainer>
            </ReviewInfo>

            <ConfirmationAlertModal
                isVisible={isModalVisible}
                title="로그인이 필요합니다.  로그인 하시겠습니까?"
                agreeMessage="확인"
                disagreeMessage="취소"
                onAgree={onPressLogin}
                onDisagree={() => setIsModalVisible(false)}
            />
        </ReviewFrameContainer>
    );
}
