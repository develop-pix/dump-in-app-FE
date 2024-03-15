import { useState } from 'react';
import { useRoute } from '@react-navigation/native';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
import { LikeBranch } from 'hooks/axios/Branch';
import { useAppSelector } from 'hooks/redux/store';
import { BranchTitleProps } from 'interfaces/Branch.interface';
import { LocationStackScreenProps } from 'interfaces/Navigation.interface';
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

export default function BranchTitle({ photoBoothName, branchName, branchHashtag, isLiked }: BranchTitleProps) {
    const [favorite, setFavorite] = useState<boolean>(isLiked);

    const route = useRoute<LocationStackScreenProps<'Branch'>['route']>();
    const isLoggedIn = useAppSelector(state => state.userData).isLoggedIn;

    /** 하트 버튼 클릭시 */
    const onPressBranchLikeButton = async () => {
        if (isLoggedIn) {
            const press_result = await LikeBranch(route.params.branchID);
            if (press_result.success) {
                setFavorite(prev => !prev);
            }
        }
    };

    return (
        <BranchTitleContainer>
            <TitleContainer>
                <BranchNameContainer>
                    <FontWhiteBiggestSemibold>{photoBoothName}</FontWhiteBiggestSemibold>
                    {/* FIXME: 백엔드 API 변수 변경후 수정필요 */}
                    <FontWhiteGreySmallestSemibold>{branchName}</FontWhiteGreySmallestSemibold>
                </BranchNameContainer>
                <BranchHashTagsContainer>
                    {TagsArrayToHashTagArrayForm(branchHashtag).map(tag => (
                        <FontYellowSmallerMediumWithLineSpacing key={tag}>{tag}</FontYellowSmallerMediumWithLineSpacing>
                    ))}
                </BranchHashTagsContainer>
            </TitleContainer>
            <FavoriteButton favorite={favorite} onPress={onPressBranchLikeButton} />
        </BranchTitleContainer>
    );
}
