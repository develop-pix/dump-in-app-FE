import { useIsFocused, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import LocationGreyIcon from 'assets/image/icon/list_location.svg';
import PickIcon from 'assets/image/icon/pick.svg';
import { PhotoBoothFrameProps } from 'interfaces/Home.interface';
import { HomeStackScreenProps } from 'interfaces/Navigation.interface';
import { colors } from 'styles/base/Variable';
import {
    LocationIconContainer,
    PhotoBoothFrameContainer,
    PhotoBoothFrameImage,
    PhotoBoothInfo,
    PhotoBoothNameContainer,
    TagImage,
} from 'styles/layout/home/photo-booth-list/PhotoBoothFrame.style';
import { FontWhiteGreySmallerMediumWithLineHeight } from 'styles/layout/reuse/text/Text.style';

export default function PhotoBoothFrame({ data }: PhotoBoothFrameProps) {
    const navigation = useNavigation<HomeStackScreenProps<'Home'>['navigation']>();
    const isFocused = useIsFocused();

    const onPressPhotoBooth = () => {
        if (isFocused) {
            navigation.navigate('PhotoBoothDetail', {
                photoBoothID: data.id,
            });
        }
    };

    return (
        <PhotoBoothFrameContainer activeOpacity={0.9} onPress={onPressPhotoBooth}>
            <PhotoBoothFrameImage source={{ uri: data.mainThumbnailImageUrl }} />
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
                    <FontWhiteGreySmallerMediumWithLineHeight>{data.name}</FontWhiteGreySmallerMediumWithLineHeight>
                </PhotoBoothNameContainer>
            </PhotoBoothInfo>
        </PhotoBoothFrameContainer>
    );
}
