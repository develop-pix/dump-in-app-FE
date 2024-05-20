import { useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
import ConfirmationAlertModal from 'components/reuse/modal/ConfirmationAlertModal';
import { LikeBranch } from 'hooks/axios/Branch';
import { useAppSelector } from 'hooks/redux/store';
import { MyPhotoBoothFrameProps } from 'interfaces/MyPage.interface';
import { MyPageStackScreenProps, RootStackScreenProps } from 'interfaces/Navigation.interface';
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
    const navigation = useNavigation<
        MyPageStackScreenProps<'MyPage'>['navigation'] | RootStackScreenProps<'MainTab'>['navigation']
    >();
    const isFocused = useIsFocused();
    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;

    const [favorite, setFavorite] = useState(photoBoothData.isLiked);
    const [isModalVisible, setIsModalVisible] = useState(false);

    /** 지점 항목 클릭시 */
    const onPressPhotoBooth = (id: string) => {
        if (isFocused) {
            (navigation as MyPageStackScreenProps<'MyPage'>['navigation']).navigate('Branch', {
                branchID: id,
            });
        } else {
            setIsModalVisible(prev => !prev);
        }
    };

    /** 하트 버튼 클릭시 */
    const onPressBranchLikeButton = async () => {
        if (isLoggedIn) {
            const press_result = await LikeBranch(photoBoothData.id);
            if (press_result.success) {
                setFavorite(prev => !prev);
            }
        }
    };

    /** 로그인 버튼 클릭시 */
    const onPressLogin = () => {
        setIsModalVisible(prev => !prev);
        (navigation as RootStackScreenProps<'MainTab'>['navigation']).navigate('Login');
    };

    return (
        <MyPhotoBoothFrameContainer onPress={() => onPressPhotoBooth(photoBoothData.id)}>
            <PhotoBoothImage source={{ uri: photoBoothData.photoBoothBrandLogoImageUrl }} resizeMode="contain" />
            <InfoContainer>
                <PhotoBoothNameWrapper>
                    <FontWhiteBiggestSemiboldWithLineHeight>
                        {photoBoothData.photoBoothBrandName}
                    </FontWhiteBiggestSemiboldWithLineHeight>
                    <FontWhiteGreySmallerSemibold>{photoBoothData.location}</FontWhiteGreySmallerSemibold>
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

            <ConfirmationAlertModal
                isVisible={isModalVisible}
                title="로그인이 필요합니다.  로그인 하시겠습니까?"
                agreeMessage="확인"
                disagreeMessage="취소"
                onAgree={onPressLogin}
                onDisagree={() => setIsModalVisible(false)}
            />
        </MyPhotoBoothFrameContainer>
    );
}
