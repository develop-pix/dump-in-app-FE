import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
import ConfirmationAlertModal from 'components/reuse/modal/ConfirmationAlertModal';
import { LikeBranch } from 'hooks/axios/Branch';
import { useAppSelector } from 'hooks/redux/store';
import { BranchTitleProps } from 'interfaces/Branch.interface';
import { LocationStackScreenProps, RootStackScreenProps } from 'interfaces/Navigation.interface';
import {
    BranchHashTagsContainer,
    BranchNameContainer,
    BranchTitleContainer,
    TitleContainer,
} from 'styles/layout/branch/BranchTitle.style';
import {
    FontWhiteBiggestSemibold,
    FontWhiteGreySmallestSemibold,
    FontYellowSmallerMediumWithLineSpacing,
} from 'styles/layout/reuse/text/Text.style';
import { TagsArrayToHashTagArrayForm } from 'utils/FormChange';

export default function BranchTitle({ photoBoothName, location, branchHashtag, isLiked }: BranchTitleProps) {
    const [favorite, setFavorite] = useState(isLiked);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const route = useRoute<LocationStackScreenProps<'Branch'>['route']>();
    const navigation = useNavigation<RootStackScreenProps<'MainTab'>['navigation']>();
    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;

    /** 하트 버튼 클릭시 */
    const onPressBranchLikeButton = async () => {
        if (isLoggedIn) {
            const press_result = await LikeBranch(route.params.branchID);
            if (press_result.success) {
                setFavorite(prev => !prev);
            }
        } else {
            setIsModalVisible(prev => !prev);
        }
    };

    /** 로그인 버튼 클릭시 */
    const onPressLogin = () => {
        setIsModalVisible(prev => !prev);
        navigation.navigate('Login');
    };

    return (
        <BranchTitleContainer>
            <TitleContainer>
                <BranchNameContainer>
                    <FontWhiteBiggestSemibold>{photoBoothName}</FontWhiteBiggestSemibold>
                    <FontWhiteGreySmallestSemibold>{location}</FontWhiteGreySmallestSemibold>
                </BranchNameContainer>
                <BranchHashTagsContainer>
                    {TagsArrayToHashTagArrayForm(branchHashtag).map(tag => (
                        <FontYellowSmallerMediumWithLineSpacing key={tag}>{tag}</FontYellowSmallerMediumWithLineSpacing>
                    ))}
                </BranchHashTagsContainer>
            </TitleContainer>
            <FavoriteButton favorite={favorite} onPress={onPressBranchLikeButton} />
            <ConfirmationAlertModal
                isVisible={isModalVisible}
                title="로그인이 필요합니다.  로그인 하시겠습니까?"
                agreeMessage="확인"
                disagreeMessage="취소"
                onAgree={onPressLogin}
                onDisagree={() => setIsModalVisible(false)}
            />
        </BranchTitleContainer>
    );
}
