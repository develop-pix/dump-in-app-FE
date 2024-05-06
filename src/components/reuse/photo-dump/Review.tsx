import { useIsFocused, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import EtcImage from 'assets/image/icon/frame_etc.svg';
import {
    CategoryStackScreenProps,
    HomeStackScreenProps,
    LocationStackScreenProps,
} from 'interfaces/Navigation.interface';
import { ReviewProps } from 'interfaces/reuse/photo-dump/Review.interface';
import { colors } from 'styles/base/Variable';
import {
    ReviewContainer,
    ReviewDescription,
    ReviewDescriptionContainer,
    ReviewFrameColor,
    ReviewFrameContainer,
    ReviewFrameGradient,
    ReviewHashtags,
    ReviewImage,
} from 'styles/layout/reuse/photo-dump/Review.style';
import { FontWhiteNormalMedium, FontYellowSmallerMediumWithLineSpacing } from 'styles/layout/reuse/text/Text.style';
import { TagsArrayToHashTagArrayForm } from 'utils/FormChange';

export default function Review({ reviewItem }: ReviewProps) {
    const navigation = useNavigation<
        HomeStackScreenProps<'PhotoBoothDetail'>['navigation'] | LocationStackScreenProps<'Branch'>['navigation']
    >();
    const isFocused = useIsFocused();

    const onPressReview = () => {
        if (isFocused) {
            switch (navigation.getId()) {
                case 'HomeStack':
                    (navigation as HomeStackScreenProps<'PhotoBoothDetail'>['navigation']).navigate('ReviewDetail', {
                        reviewID: reviewItem.id,
                        reviewType: 'search',
                        photoBoothLocation: undefined,
                        frameColor: undefined,
                        participants: undefined,
                        cameraShot: undefined,
                        concept: undefined,
                        keyword: undefined,
                        isEventReview: undefined,
                    });
                    break;
                case 'LocationStack':
                    (navigation as LocationStackScreenProps<'Branch'>['navigation']).navigate('ReviewDetail', {
                        reviewID: reviewItem.id,
                        reviewType: 'photo_booth',
                        photoBoothLocation: undefined,
                        frameColor: undefined,
                        participants: undefined,
                        cameraShot: undefined,
                        concept: undefined,
                        keyword: undefined,
                        isEventReview: undefined,
                    });
                    break;
                case 'CategoryStack':
                    (navigation as CategoryStackScreenProps<'PhotoBoothDetail'>['navigation']).navigate(
                        'ReviewDetail',
                        {
                            reviewID: reviewItem.id,
                            reviewType: 'photo_booth_brand',
                            photoBoothLocation: undefined,
                            frameColor: undefined,
                            participants: undefined,
                            cameraShot: undefined,
                            concept: undefined,
                            keyword: undefined,
                            isEventReview: undefined,
                        },
                    );
                    break;
            }
        }
    };

    return (
        <ReviewContainer activeOpacity={0.9} onPress={onPressReview}>
            <ReviewImage source={{ uri: reviewItem.mainThumbnailImageUrl }} />
            <LinearGradient
                colors={['transparent', colors.lightblack]}
                locations={[0.1, 1]}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -10,
                    height: 200,
                }}
            />
            <ReviewDescriptionContainer>
                <ReviewDescription>
                    <FontWhiteNormalMedium>{reviewItem.content}</FontWhiteNormalMedium>
                </ReviewDescription>
                <ReviewHashtags>
                    <ReviewFrameContainer>
                        <FontYellowSmallerMediumWithLineSpacing>#</FontYellowSmallerMediumWithLineSpacing>
                        {reviewItem.frameColor === 'gradient' ? (
                            <ReviewFrameGradient>
                                <EtcImage width={16} height={16} />
                            </ReviewFrameGradient>
                        ) : (
                            <ReviewFrameColor colorOption={reviewItem.frameColor} />
                        )}
                    </ReviewFrameContainer>
                    <FontYellowSmallerMediumWithLineSpacing>
                        # {reviewItem.participants}
                    </FontYellowSmallerMediumWithLineSpacing>
                    <FontYellowSmallerMediumWithLineSpacing>
                        # {reviewItem.cameraShot}
                    </FontYellowSmallerMediumWithLineSpacing>
                    {TagsArrayToHashTagArrayForm(reviewItem.concept).map(tag => (
                        <FontYellowSmallerMediumWithLineSpacing key={tag}>{tag}</FontYellowSmallerMediumWithLineSpacing>
                    ))}
                    {reviewItem.curlAmount === true ? (
                        <FontYellowSmallerMediumWithLineSpacing># 고데기 있음</FontYellowSmallerMediumWithLineSpacing>
                    ) : (
                        <FontYellowSmallerMediumWithLineSpacing># 고데기 없음</FontYellowSmallerMediumWithLineSpacing>
                    )}
                    {reviewItem.goodsAmount === true && (
                        <FontYellowSmallerMediumWithLineSpacing># 소품 많음</FontYellowSmallerMediumWithLineSpacing>
                    )}
                </ReviewHashtags>
            </ReviewDescriptionContainer>
        </ReviewContainer>
    );
}
