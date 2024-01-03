import { useState } from 'react';
import { Platform } from 'react-native';

import { ReviewDescriptionProps } from '../../interfaces/ReviewDetail.interface';
import {
    FontWhiteNormalMedium,
    FontWhiteSmallerMedium,
    FontYellowSmallerMediumWithLineSpacing,
} from '../../styles/layout/reuse/text/Text.style';
import {
    ReviewDescBottom,
    ReviewDescMiddle,
    ReviewDescriptionContainer,
    ReviewDescriptionTouchableContainer,
    ReviewDescTop,
} from '../../styles/layout/review-detail/ReviewDetail.style';
import { DateToReviewDateForm, TagsArrayToHashTagArrayForm } from '../../utils/FormChange';
import FavoirteButton from '../reuse/button/FavoritetButton';

export default function ReviewDescription({ date, description, hashtag }: ReviewDescriptionProps) {
    const [favorite, setFavorite] = useState<boolean>(false);
    const [numLines, setNumLines] = useState<number>(2);
    const platform = Platform.OS;

    /* Press 함수를 2개이상 넣어줄수 없어서 토글 형식으로 구현 */
    const onPressSeeMore = () => {
        if (numLines) {
            setNumLines(0);
        } else {
            setNumLines(2);
        }
    };

    return (
        <ReviewDescriptionContainer platform={platform}>
            <ReviewDescTop>
                <FontWhiteSmallerMedium>{DateToReviewDateForm(date)}</FontWhiteSmallerMedium>
                <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
            </ReviewDescTop>
            <ReviewDescMiddle>
                <ReviewDescriptionTouchableContainer onPress={onPressSeeMore} activeOpacity={0.8}>
                    <FontWhiteNormalMedium numberOfLines={numLines}>{description}</FontWhiteNormalMedium>
                </ReviewDescriptionTouchableContainer>
            </ReviewDescMiddle>
            <ReviewDescBottom>
                {TagsArrayToHashTagArrayForm(hashtag).map(tag => (
                    <FontYellowSmallerMediumWithLineSpacing key={tag}>{tag}</FontYellowSmallerMediumWithLineSpacing>
                ))}
            </ReviewDescBottom>
        </ReviewDescriptionContainer>
    );
}
