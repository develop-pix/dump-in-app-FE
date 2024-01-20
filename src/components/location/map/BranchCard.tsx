import { useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
import { BranchCardProps } from 'interfaces/Location.interface';
import { LocationStackScreenProps } from 'interfaces/Navigation.interface';
import {
    BranchCardBottom,
    BranchCardBranchNameWrapper,
    BranchCardDescription,
    BranchCardHashtag,
    BranchCardHorizonLine,
    BranchCardLogo,
    BranchCardTop,
    CardContainer,
    TouchableCardContainer,
} from 'styles/layout/location/BranchCard.style';
import {
    FontWhiteBiggestSemiboldWithLineHeight,
    FontWhiteGreySmallerSemibold,
    FontWhiteGreySmallestMedium,
    FontYellowSmallerMediumWithLineSpacing,
} from 'styles/layout/reuse/text/Text.style';
import { TagsArrayToHashTagArrayForm } from 'utils/FormChange';

export default function BranchCard({
    branchID,
    imageLogo,
    photoBoothName,
    branchName,
    hashtag,
    isLiked,
    distance,
}: BranchCardProps) {
    const [favorite, setFavorite] = useState<boolean>(isLiked);
    const navigation = useNavigation<LocationStackScreenProps<'Location'>['navigation']>();
    const isFocused = useIsFocused();

    /** Branch 페이지 이동 */
    const onPressBranchCard = () => {
        if (isFocused) {
            navigation.navigate('Branch', { branchID });
        }
    };

    return (
        <TouchableCardContainer activeOpacity={0.95} onPress={onPressBranchCard}>
            <CardContainer>
                <BranchCardTop>
                    <BranchCardLogo source={{ uri: imageLogo }} />
                    <BranchCardDescription>
                        <BranchCardBranchNameWrapper>
                            <FontWhiteBiggestSemiboldWithLineHeight>
                                {photoBoothName}
                            </FontWhiteBiggestSemiboldWithLineHeight>
                            <FontWhiteGreySmallerSemibold>{branchName}</FontWhiteGreySmallerSemibold>
                        </BranchCardBranchNameWrapper>
                        <BranchCardHashtag>
                            {TagsArrayToHashTagArrayForm(hashtag).map(tag => (
                                <FontYellowSmallerMediumWithLineSpacing key={tag}>
                                    {tag}
                                </FontYellowSmallerMediumWithLineSpacing>
                            ))}
                        </BranchCardHashtag>
                    </BranchCardDescription>
                    <FavoriteButton favorite={favorite} setFavorite={setFavorite} />
                </BranchCardTop>
                <BranchCardHorizonLine />
                <BranchCardBottom>
                    <FontWhiteGreySmallestMedium>내 위치로부터 {distance} ·</FontWhiteGreySmallestMedium>
                    <FontWhiteGreySmallestMedium>방문하기</FontWhiteGreySmallestMedium>
                </BranchCardBottom>
            </CardContainer>
        </TouchableCardContainer>
    );
}
