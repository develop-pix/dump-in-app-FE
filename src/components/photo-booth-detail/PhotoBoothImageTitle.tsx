import { Platform } from 'react-native';
import { RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import GoBackButton from 'components/reuse/button/GoBackButton';
import { NormalButton } from 'components/reuse/button/NormalButton';
import { PhotoBoothParamList, RootStackParam } from 'interfaces/NavigationBar';
import { PhotoBoothImageTitleProps } from 'interfaces/PhotoBoothDetail.interface';
import { colors } from 'styles/base/Variable';
import {
    ContentsContainer,
    NormalButtonContainer,
    PhotoBoothImage,
    PhotoBoothImageContentContainer,
    PhotoBoothImageTitleContainer,
    TitleContainer,
} from 'styles/layout/photo-booth-detail/PhotoBoothImageTitle.style';
import { GoBackButtonContainer } from 'styles/layout/reuse/button/GoBackButton.style';
import { FontWhiteBiggestSemibold, FontYellowSmallerMediumWithLineSpacing } from 'styles/layout/reuse/text/Text.style';
import { ReviewDescBottom } from 'styles/layout/review-detail/ReviewDetail.style';
import { TagsArrayToHashTagArrayForm } from 'utils/FormChange';

export default function PhotoBoothImageTitle({ photoBoothData }: PhotoBoothImageTitleProps) {
    const platform = Platform.OS;
    const route = useRoute<RouteProp<PhotoBoothParamList, 'photoBoothType'>>();
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
            <PhotoBoothImage source={{ uri: photoBoothData.representativeImage }}>
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
                        <FontWhiteBiggestSemibold>{photoBoothData.photoBoothName}</FontWhiteBiggestSemibold>
                    </TitleContainer>

                    <ReviewDescBottom>
                        {TagsArrayToHashTagArrayForm(photoBoothData.hashtag).map(tag => (
                            <FontYellowSmallerMediumWithLineSpacing key={tag}>
                                {tag}
                            </FontYellowSmallerMediumWithLineSpacing>
                        ))}
                    </ReviewDescBottom>
                </ContentsContainer>

                <NormalButtonContainer>
                    <NormalButton text="내 주변 포토부스 보러가기" onPress={onPressButton} />
                </NormalButtonContainer>
            </PhotoBoothImageContentContainer>
        </PhotoBoothImageTitleContainer>
    );
}
