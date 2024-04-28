import { useIsFocused, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import LocationGreyIcon from 'assets/image/icon/list_location.svg';
import { ReviewFrameProps } from 'interfaces/Home.interface';
import { HomeStackScreenProps } from 'interfaces/Navigation.interface';
import { colors } from 'styles/base/Variable';
import {
    LocationIconContainer,
    ReviewFrameContainer,
    ReviewFrameImage,
    ReviewInfo,
    ReviewNameContainer,
} from 'styles/layout/home/photo-booth-list/ReviewFrame.style';
import { FontWhiteGreySmallerMediumWithLineHeight } from 'styles/layout/reuse/text/Text.style';

export default function ReviewFrame({ data, filterData }: ReviewFrameProps) {
    const navigation = useNavigation<HomeStackScreenProps<'Home'>['navigation']>();
    const isFocused = useIsFocused();

    /** ReviewDetail로 이동 */
    const onPressReview = () => {
        if (isFocused) {
            navigation.navigate('ReviewDetail', {
                reviewID: data.id,
                reviewType: 'filter',
                photoBoothLocation: filterData?.photoBoothLocation,
                frameColor: filterData?.frameColor,
                participants: filterData?.participants,
                cameraShot: filterData?.cameraShot,
                concept: filterData?.concept,
                keyword: undefined,
                isEventReview: undefined,
            });
        }
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
        </ReviewFrameContainer>
    );
}
