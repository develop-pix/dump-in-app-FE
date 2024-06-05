import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
import ConfirmationAlertModal from 'components/reuse/modal/ConfirmationAlertModal';
import { LikeReview } from 'hooks/axios/Review';
import { useAppSelector } from 'hooks/redux/store';
import {
    CategoryStackScreenProps,
    HomeStackScreenProps,
    LocationStackScreenProps,
    MyPageStackScreenProps,
} from 'interfaces/Navigation.interface';
import { colors } from 'styles/base/Variable';
import { FontWhiteNormalMedium, FontWhiteSmallerMedium } from 'styles/layout/reuse/text/Text.style';
import {
    ReviewDescMiddle,
    ReviewDescriptionContainer,
    ReviewDescriptionTouchableContainer,
    ReviewDescTop,
} from 'styles/layout/review-detail/ReviewDetail.style';

export default function ReviewDescription() {
    const route = useRoute<
        | HomeStackScreenProps<'ReviewDetail'>['route']
        | LocationStackScreenProps<'ReviewDetail'>['route']
        | MyPageStackScreenProps<'ReviewDetail'>['route']
        | CategoryStackScreenProps<'ReviewDetail'>['route']
    >();
    const navigation = useNavigation<
        | HomeStackScreenProps<'ReviewDetail'>['navigation']
        | LocationStackScreenProps<'ReviewDetail'>['navigation']
        | MyPageStackScreenProps<'ReviewDetail'>['navigation']
        | CategoryStackScreenProps<'ReviewDetail'>['navigation']
    >();

    const routes = navigation.getState().routes;
    const tabRouteName = routes[0].name;

    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;
    const { date, content, isLiked } = useAppSelector(state => {
        switch (tabRouteName) {
            case 'Home':
                return state.homeReviewDetail;
            case 'Location':
                return state.branchReviewDetail;
            case 'MyPage':
                return state.myPageReviewDetail;
            case 'Category':
                return state.categoryReviewDetail;
            default:
                return state.homeReviewDetail;
        }
    });

    const [favorite, setFavorite] = useState(isLiked);
    const [numLines, setNumLines] = useState(2);
    const [isModalVisible, setIsModalVisible] = useState(false);

    /** 리뷰(content) 더보기, 줄이기 */
    const onPressSeeMore = () => {
        if (numLines) {
            setNumLines(0);
        } else {
            setNumLines(2);
        }
    };

    /** 하트(좋아요) 버튼 클릭 */
    const onPressReviewLikeButton = async () => {
        if (isLoggedIn) {
            const press_result = await LikeReview(route.params.reviewID);
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
        (navigation as MyPageStackScreenProps<'ReviewDetail'>['navigation']).navigate('Login');
    };

    return (
        <ReviewDescriptionContainer>
            <LinearGradient
                colors={['transparent', '#00000080', colors.black]}
                locations={[0, 0.3, 1]}
                style={{
                    width: '100%',
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    minHeight: 110,
                }}>
                <ReviewDescTop>
                    <FontWhiteSmallerMedium>{date}</FontWhiteSmallerMedium>
                    <FavoriteButton favorite={favorite} onPress={onPressReviewLikeButton} />
                </ReviewDescTop>
                <ReviewDescMiddle>
                    <ReviewDescriptionTouchableContainer onPress={onPressSeeMore} activeOpacity={0.8}>
                        <FontWhiteNormalMedium numberOfLines={numLines}>{content}</FontWhiteNormalMedium>
                    </ReviewDescriptionTouchableContainer>
                </ReviewDescMiddle>
                <ConfirmationAlertModal
                    isVisible={isModalVisible}
                    title="로그인이 필요합니다.  로그인 하시겠습니까?"
                    agreeMessage="확인"
                    disagreeMessage="취소"
                    onAgree={onPressLogin}
                    onDisagree={() => setIsModalVisible(false)}
                />
            </LinearGradient>
        </ReviewDescriptionContainer>
    );
}
