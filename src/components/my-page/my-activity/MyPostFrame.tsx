import React, { useState } from 'react';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import LocationGreyIcon from '../../../assets/image/icon/list_location.svg';
import { ReviewFrameProps } from '../../../interfaces/Home.interface';
import { RootStackParam, ScreenName } from '../../../interfaces/NavigationBar';
import { colors } from '../../../styles/base/Variable';
import { FavoirteIcon } from '../../../styles/layout/category/CategoryEventItem.style';
import {
    LocationIconContainer,
    ReviewFrameContainer,
    ReviewFrameImage,
    ReviewInfo,
    ReviewNameContainer,
} from '../../../styles/layout/home/photo-booth-list/ReviewFrame.style';
import { FontWhiteGreySmallerMediumWithLineHeight } from '../../../styles/layout/reuse/text/Text.style';
import FavoirteButton from '../../reuse/button/FavoritetButton';

export default function MyPostFrame({ data }: ReviewFrameProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const isFocused = useIsFocused();
    const route = useRoute();

    const onPressReview = () => {
        const currentScreen = (route.params as { screen: ScreenName }).screen;
        if (isFocused) {
            navigation.push('ReviewDetail', {
                reviewID: data.reviewID,
                screen: currentScreen,
            });
        }
    };

    const [favorite, setFavorite] = useState<boolean>(true);

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

            <FavoirteIcon>
                <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
            </FavoirteIcon>

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
