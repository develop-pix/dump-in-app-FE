import { useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
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
import { useAppSelector } from 'hooks/redux/store';
import { LikeBranch } from 'hooks/axios/Branch';

export default function MyPhotoBoothFrame({ photoBoothData }: MyPhotoBoothFrameProps) {
    const navigation = useNavigation<MyPageStackScreenProps<'MyPage'>['navigation']>();
    const isFocused = useIsFocused();

    const [favorite, setFavorite] = useState<boolean>(photoBoothData.isLiked);
    const accessToken = useAppSelector(state => state.token).accessToken;

    /** 지점 항목 클릭시 */
    //FIXME: PhotoBoothDetail이 아닌 Branch로 이동해야함
    const onPressPhotoBooth = (id: string) => {
        if (isFocused) {
            navigation.navigate('PhotoBoothDetail', {
                photoBoothID: id,
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
            {/* FIXME: resizeMode 수정 필요 ,ios에서 http일경우 사진이 출력되지 않는 문제 */}
            <PhotoBoothImage source={{ uri: photoBoothData.photoBoothBrandLogoImageUrl }} resizeMode='contain' />
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
