import { Platform } from 'react-native';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import GoBackButton from 'components/reuse/button/GoBackButton';
import { NormalButton } from 'components/reuse/button/NormalButton';
import {
    CategoryStackScreenProps,
    HomeStackScreenProps,
    MyPageStackScreenProps,
} from 'interfaces/Navigation.interface';
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
    const route = useRoute<
        | HomeStackScreenProps<'PhotoBoothDetail'>['route']
        | CategoryStackScreenProps<'PhotoBoothDetail'>['route']
        | MyPageStackScreenProps<'PhotoBoothDetail'>['route']
    >();
    const navigation = useNavigation<
        | HomeStackScreenProps<'PhotoBoothDetail'>['navigation']
        | CategoryStackScreenProps<'PhotoBoothDetail'>['navigation']
        | MyPageStackScreenProps<'PhotoBoothDetail'>['navigation']
    >();
    const isFocused = useIsFocused();

    const onPressButton = () => {
        if (isFocused) {
            switch (navigation.getId()) {
                case 'HomeStack':
                    (navigation as HomeStackScreenProps<'PhotoBoothDetail'>['navigation']).navigate('MainTab', {
                        screen: 'LocationTab',
                        params: {
                            screen: 'Location',
                            params: { photoBoothID: route.params.photoBoothID },
                        },
                    });
                    break;
                case 'CategoryStack':
                    (navigation as CategoryStackScreenProps<'PhotoBoothDetail'>['navigation']).navigate('MainTab', {
                        screen: 'LocationTab',
                        params: {
                            screen: 'Location',
                            params: { photoBoothID: route.params.photoBoothID },
                        },
                    });
                    break;
                case 'MyPageStack':
                    (navigation as MyPageStackScreenProps<'PhotoBoothDetail'>['navigation']).navigate('MainTab', {
                        screen: 'LocationTab',
                        params: {
                            screen: 'Location',
                            params: { photoBoothID: route.params.photoBoothID },
                        },
                    });
                    break;
            }
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
