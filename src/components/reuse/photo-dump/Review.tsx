import { useIsFocused, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {
    HomeStackScreenProps,
    LocationStackScreenProps,
    MyPageStackScreenProps,
} from 'interfaces/Navigation.interface';
import { ReviewProps } from 'interfaces/reuse/photo-dump/Review.interface';
import { colors } from 'styles/base/Variable';
import {
    ReviewContainer,
    ReviewDescription,
    ReviewDescriptionContainer,
    ReviewHashtags,
    ReviewImage,
} from 'styles/layout/reuse/photo-dump/Review.style';
import { FontWhiteNormalMedium, FontYellowSmallerMediumWithLineSpacing } from 'styles/layout/reuse/text/Text.style';
import { TagsArrayToHashTagArrayForm } from 'utils/FormChange';

export default function Review({ reviewID, reviewImage, reviewDescription, reviewHashtags }: ReviewProps) {
    const navigation = useNavigation<
        | HomeStackScreenProps<'PhotoBoothDetail'>['navigation']
        | LocationStackScreenProps<'Branch'>['navigation']
        | MyPageStackScreenProps<'PhotoBoothDetail'>['navigation']
    >();

    const isFocused = useIsFocused();

    const onPressReview = () => {
        if (isFocused) {
            switch (navigation.getId()) {
                case 'HomeStack':
                    (navigation as HomeStackScreenProps<'PhotoBoothDetail'>['navigation']).navigate('ReviewDetail', {
                        reviewID,
                    });
                    break;
                case 'LocationStack':
                    (navigation as LocationStackScreenProps<'Branch'>['navigation']).navigate('ReviewDetail', {
                        reviewID,
                    });
                    break;
                case 'MyPageStack':
                    (navigation as MyPageStackScreenProps<'PhotoBoothDetail'>['navigation']).navigate('ReviewDetail', {
                        reviewID,
                    });
                    break;
            }
        }
    };

    return (
        <ReviewContainer activeOpacity={0.9} onPress={onPressReview}>
            <ReviewImage source={{ uri: reviewImage }} />
            <LinearGradient
                colors={['transparent', colors.lightblack]}
                locations={[0.1, 1]}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -10,
                    height: 130,
                }}
            />

            <ReviewDescriptionContainer>
                <ReviewDescription>
                    <FontWhiteNormalMedium>{reviewDescription}</FontWhiteNormalMedium>
                </ReviewDescription>
                <ReviewHashtags>
                    {TagsArrayToHashTagArrayForm(reviewHashtags).map(tag => (
                        <FontYellowSmallerMediumWithLineSpacing key={tag}>{tag}</FontYellowSmallerMediumWithLineSpacing>
                    ))}
                </ReviewHashtags>
            </ReviewDescriptionContainer>
        </ReviewContainer>
    );
}
