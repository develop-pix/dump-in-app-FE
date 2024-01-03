import React from 'react';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import LocationGreyIcon from '../../../assets/image/icon/list_location.svg';
import PickIcon from '../../../assets/image/icon/pick.svg';
import { PhotoBoothFrameProps } from '../../../interfaces/Home.interface';
import { RootStackParam, ScreenName } from '../../../interfaces/NavigationBar';
import { colors } from '../../../styles/base/Variable';
import {
    LocationIconContainer,
    PhotoBoothFrameContainer,
    PhotoBoothFrameImage,
    PhotoBoothInfo,
    PhotoBoothNameContainer,
    TagImage,
} from '../../../styles/layout/home/photo-booth-list/PhotoBoothFrame.style';
import { FontWhiteGreySmallerMediumWithLineHeight } from '../../../styles/layout/reuse/text/Text.style';

export default function PhotoBoothFrame({ data }: PhotoBoothFrameProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const isFocused = useIsFocused();
    const route = useRoute();

    const onPressPhotoBooth = () => {
        const currentScreen = (route.params as { screen: ScreenName }).screen;
        if (isFocused) {
            navigation.push('PhotoBoothDetail', {
                PhotoBoothID: data.photoBoothID,
                screen: currentScreen,
            });
        }
    };

    return (
        <PhotoBoothFrameContainer activeOpacity={0.9} onPress={onPressPhotoBooth}>
            <PhotoBoothFrameImage source={{ uri: data.representativeImage }} />
            <LinearGradient
                colors={['transparent', colors.lightblack]}
                locations={[0.1, 1]}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 130,
                }}
            />

            <TagImage>
                <PickIcon />
            </TagImage>

            <PhotoBoothInfo>
                <PhotoBoothNameContainer>
                    <LocationIconContainer>
                        <LocationGreyIcon width={18} height={21} />
                    </LocationIconContainer>
                    <FontWhiteGreySmallerMediumWithLineHeight>
                        {data.photoboothName}
                    </FontWhiteGreySmallerMediumWithLineHeight>
                </PhotoBoothNameContainer>
            </PhotoBoothInfo>
        </PhotoBoothFrameContainer>
    );
}
