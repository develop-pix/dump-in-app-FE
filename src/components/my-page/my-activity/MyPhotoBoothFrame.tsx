import { useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
import { MyPhotoBoothFrameProps } from 'interfaces/MyPage.interface';
import { RootStackParam } from 'interfaces/NavigationBar';
import {
    FavoriteIcon,
    HashtagContainer,
    InfoContainer,
    MyPhotoBoothFrameContainer,
    PhotoBoothImage,
    PhotoBoothNameWrapper,
} from 'styles/layout/my-page/MyActivity/MyPhotoBoothFrame.style';
import {
    FontWhiteBiggestSemiboldWithLineHeight,
    FontWhiteGreySmallerSemibold,
    FontYellowSmallerMediumWithLineSpacingWithMargin,
} from 'styles/layout/reuse/text/Text.style';
import { TagsArrayToHashTagArrayForm } from 'utils/FormChange';

export default function MyPhotoBoothFrame({ photoBoothData }: MyPhotoBoothFrameProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const isFocused = useIsFocused();

    const onPressPhotoBooth = (id: number) => {
        if (isFocused) {
            navigation.navigate('PhotoBoothDetail', {
                PhotoBoothID: id,
            });
        }
    };

    const [favorite, setFavorite] = useState<boolean>(photoBoothData.myPhotoBooth);

    return (
        <MyPhotoBoothFrameContainer onPress={() => onPressPhotoBooth(photoBoothData.photoBoothID)}>
            <PhotoBoothImage source={{ uri: photoBoothData.representativeImage }} />
            <InfoContainer>
                <PhotoBoothNameWrapper>
                    <FontWhiteBiggestSemiboldWithLineHeight>
                        {photoBoothData.photoBoothName}
                    </FontWhiteBiggestSemiboldWithLineHeight>
                    <FontWhiteGreySmallerSemibold>{photoBoothData.branch}</FontWhiteGreySmallerSemibold>
                </PhotoBoothNameWrapper>

                <HashtagContainer>
                    {TagsArrayToHashTagArrayForm(photoBoothData.hashtag).map(tag => (
                        <FontYellowSmallerMediumWithLineSpacingWithMargin key={tag}>
                            {tag}
                        </FontYellowSmallerMediumWithLineSpacingWithMargin>
                    ))}
                </HashtagContainer>
            </InfoContainer>

            <FavoriteIcon>
                <FavoriteButton favorite={favorite} setFavorite={setFavorite} />
            </FavoriteIcon>
        </MyPhotoBoothFrameContainer>
    );
}
