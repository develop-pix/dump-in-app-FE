import { Platform } from 'react-native';
import { RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import { PhotoBoothParamList, RootStackParam } from '../../interfaces/NavigationBar';
import { PhotoBoothImageTitleProps } from '../../interfaces/PhotoBoothDetail.interface';
import { colors } from '../../styles/base/Variable';
import {
    ContentsContainer,
    NomalButtonContainer,
    PhotoBoothImage,
    PhotoBoothImageContentContainer,
    PhotoBoothImageTitleContainer,
    TitleContainer,
} from '../../styles/layout/photobooth-detail/PhotoBoothImageTitle.style';
import { GoBackButtonContainer } from '../../styles/layout/reuse/button/GoBackButton.style';
import {
    FontWhiteBiggestSemibold,
    FontYellowSmallerMediumWithLineSpacing,
} from '../../styles/layout/reuse/text/Text.style';
import { ReviewDescBottom } from '../../styles/layout/review-detail/ReviewDetail.style';
import { TagsArrayToHashTagArrayForm } from '../../utils/FormChange';
import GoBackButton from '../reuse/button/GoBackButton';
import { NormalButton } from '../reuse/button/NormalButton';

export default function PhotoBoothImageTitle({ photoboothData }: PhotoBoothImageTitleProps) {
    const platform = Platform.OS;
    const route = useRoute<RouteProp<PhotoBoothParamList, 'photoboothType'>>();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const isFocused = useIsFocused();

    const onPressButton = () => {
        if (isFocused) {
            navigation.push('Location', {
                PhotoBoothID: route.params.PhotoBoothID,
                screen: 'Location',
            });
        }
    };

    return (
        <PhotoBoothImageTitleContainer>
            <PhotoBoothImage source={{ uri: photoboothData.representativeImage }}>
                <LinearGradient
                    colors={['transparent', colors.lightblack]}
                    locations={[0.1, 1]}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 600,
                    }}
                />
            </PhotoBoothImage>

            <PhotoBoothImageContentContainer>
                <GoBackButtonContainer platform={platform}>
                    <GoBackButton />
                </GoBackButtonContainer>

                <ContentsContainer>
                    <TitleContainer>
                        <FontWhiteBiggestSemibold>{photoboothData.photoboothName}</FontWhiteBiggestSemibold>
                    </TitleContainer>

                    <ReviewDescBottom>
                        {TagsArrayToHashTagArrayForm(photoboothData.hashtag).map(tag => (
                            <FontYellowSmallerMediumWithLineSpacing key={tag}>
                                {tag}
                            </FontYellowSmallerMediumWithLineSpacing>
                        ))}
                    </ReviewDescBottom>
                </ContentsContainer>

                <NomalButtonContainer>
                    <NormalButton text="내 주변 포토부스 보러가기" onPress={onPressButton} />
                </NomalButtonContainer>
            </PhotoBoothImageContentContainer>
        </PhotoBoothImageTitleContainer>
    );
}
