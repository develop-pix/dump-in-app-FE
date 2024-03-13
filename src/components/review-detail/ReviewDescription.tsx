import { useState } from 'react';
import { Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
import { LikeReview } from 'hooks/axios/Review';
import { storage } from 'hooks/mmkv/storage';
import { useAppSelector } from 'hooks/redux/store';
import {
    HomeStackScreenProps,
    LocationStackScreenProps,
    MyPageStackScreenProps,
} from 'interfaces/Navigation.interface';
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
    const isLoggedIn = useAppSelector(state => state.userData).isLoggedIn;
    const accessToken = storage.getString('token.accessToken');

    const [favorite, setFavorite] = useState<boolean>(isLiked);
    const [numLines, setNumLines] = useState<number>(2);

    const platform = Platform.OS;
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
        if (accessToken && isLoggedIn) {
            const press_result = await LikeReview(accessToken, route.params.reviewID);
            if (press_result.success) {
                setFavorite(prev => !prev);
            }
        }
    };

    return (
        <ReviewDescriptionContainer platform={platform}>
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
        </ReviewDescriptionContainer>
    );
}
