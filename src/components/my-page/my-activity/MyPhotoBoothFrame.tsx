import { useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
import { LikeBranch } from 'hooks/axios/Branch';
import { useAppSelector } from 'hooks/redux/store';
import { MyPhotoBoothFrameProps } from 'interfaces/MyPage.interface';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
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
    const navigation = useNavigation<MyPageStackScreenProps<'MyPage'>['navigation']>();
    const isFocused = useIsFocused();

    const [favorite, setFavorite] = useState<boolean>(photoBoothData.isLiked);
    const accessToken = useAppSelector(state => state.token).accessToken;

    /** 지점 항목 클릭시 */
    const onPressPhotoBooth = (id: string) => {
        if (isFocused) {
            navigation.navigate('Branch', {
                branchID: id,
            });
        }
    };

    /** 하트 버튼 클릭시 */
    const onPressBranchLikeButton = async () => {
        if (accessToken) {
            const press_result = await LikeBranch(accessToken, photoBoothData.id);
            if (press_result.success) {
                setFavorite(prev => !prev);
            }
        }
    };

    return (
        <MyPhotoBoothFrameContainer onPress={() => onPressPhotoBooth(photoBoothData.id)}>
            <PhotoBoothImage source={{ uri: photoBoothData.photoBoothBrandLogoImageUrl }} resizeMode="contain" />
            <InfoContainer>
                <PhotoBoothNameWrapper>
                    <FontWhiteBiggestSemiboldWithLineHeight>
                        {photoBoothData.photoBoothBrandName}
                    </FontWhiteBiggestSemiboldWithLineHeight>
                    <FontWhiteGreySmallerSemibold>{photoBoothData.photoBoothName}</FontWhiteGreySmallerSemibold>
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
                <FavoriteButton favorite={favorite} onPress={onPressBranchLikeButton} />
            </FavoriteIcon>
        </MyPhotoBoothFrameContainer>
    );
}
