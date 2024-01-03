import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import { RootStackParam, ScreenName } from '../../../interfaces/NavigationBar';
import { ReviewProps } from '../../../interfaces/reuse/photo-dump/Review.interface';
import { colors } from '../../../styles/base/Variable';
import {
    ReviewContainer,
    ReviewDescription,
    ReviewDescriptionContainer,
    ReviewHashtags,
    ReviewImage,
} from '../../../styles/layout/reuse/photo-dump/Review.style';
import {
    FontWhiteNormalMedium,
    FontYellowSmallerMediumWithLineSpacing,
} from '../../../styles/layout/reuse/text/Text.style';
import { TagsArrayToHashTagArrayForm } from '../../../utils/FormChange';

export default function Review({ reviewID, reviewImage, reviewDescription, reviewHashtags }: ReviewProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const isFocused = useIsFocused();
    const route = useRoute();

    const onPressReview = () => {
        const currentScreen = (route.params as { screen: ScreenName }).screen;
        if (isFocused) {
            navigation.push('ReviewDetail', {
                reviewID,
                screen: currentScreen,
            });
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
