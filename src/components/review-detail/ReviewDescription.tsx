import { useState } from 'react';
import { Platform, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
import { LikeReview } from 'hooks/axios/Review';
import { useAppSelector } from 'hooks/redux/store';
import {
    HomeStackScreenProps,
    LocationStackScreenProps,
    MyPageStackScreenProps,
} from 'interfaces/Navigation.interface';
import { colors } from 'styles/base/Variable';
import {
    FontWhiteNormalMedium,
    FontWhiteSmallerMedium,
    FontYellowSmallerMediumWithLineSpacing,
} from 'styles/layout/reuse/text/Text.style';
import {
    ReviewDescBottom,
    ReviewDescMiddle,
    ReviewDescriptionContainer,
    ReviewDescriptionTouchableContainer,
    ReviewDescTop,
} from 'styles/layout/review-detail/ReviewDetail.style';
import { TagsArrayToHashTagArrayForm } from 'utils/FormChange';

export default function ReviewDescription() {
    const { date, content, concept, isLiked } = useAppSelector(state => state.branchReviewDetail);
    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;

    const [favorite, setFavorite] = useState(isLiked);
    const [numLines, setNumLines] = useState(2);

    const route = useRoute<
        | HomeStackScreenProps<'ReviewDetail'>['route']
        | LocationStackScreenProps<'ReviewDetail'>['route']
        | MyPageStackScreenProps<'ReviewDetail'>['route']
    >();

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
        }
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
                    minHeight: 160,
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
                <ReviewDescBottom>
                    {TagsArrayToHashTagArrayForm(concept).map(tag => (
                        <FontYellowSmallerMediumWithLineSpacing key={tag}>{tag}</FontYellowSmallerMediumWithLineSpacing>
                    ))}
                </ReviewDescBottom>
            </LinearGradient>
        </ReviewDescriptionContainer>
    );
}
