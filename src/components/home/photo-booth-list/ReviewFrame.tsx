import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import LocationGreyIcon from 'assets/image/icon/list_location.svg';
import { ReviewFrameProps } from 'interfaces/Home.interface';
import { RootStackParam } from 'interfaces/NavigationBar';
import { colors } from 'styles/base/Variable';
import {
    LocationIconContainer,
    ReviewFrameContainer,
    ReviewFrameImage,
    ReviewInfo,
    ReviewNameContainer,
} from 'styles/layout/home/photo-booth-list/ReviewFrame.style';
import { FontWhiteGreySmallerMediumWithLineHeight } from 'styles/layout/reuse/text/Text.style';

export default function ReviewFrame({ data }: ReviewFrameProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const isFocused = useIsFocused();

    const onPressReview = () => {
        if (isFocused) {
            navigation.navigate('ReviewDetail', {
                reviewID: data.reviewID,
            });
        }
    };

    return (
        <ReviewFrameContainer activeOpacity={0.9} onPress={onPressReview}>
            <ReviewFrameImage source={{ uri: data.representativeImage }} />
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

            <ReviewInfo>
                <ReviewNameContainer>
                    <LocationIconContainer>
                        <LocationGreyIcon width={18} height={21} />
                    </LocationIconContainer>
                    <FontWhiteGreySmallerMediumWithLineHeight>
                        {data.branchName}
                    </FontWhiteGreySmallerMediumWithLineHeight>
                </ReviewNameContainer>
            </ReviewInfo>
        </ReviewFrameContainer>
    );
}
