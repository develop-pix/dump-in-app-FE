import { useState } from 'react';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { BranchCardProps } from '../../../interfaces/Location.interface';
import { RootStackParam, ScreenName } from '../../../interfaces/NavigationBar';
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
} from '../../../styles/layout/location/BranchCard.style';
import {
    FontWhiteBiggestSemiboldWithLineHeight,
    FontWhiteGreySmallerSemibold,
    FontWhiteGreySmallestMedium,
    FontYellowSmallerMediumWithLineSpacing,
} from '../../../styles/layout/reuse/text/Text.style';
import { DistanceForm, TagsArrayToHashTagArrayForm } from '../../../utils/FormChange';
import FavoirteButton from '../../reuse/button/FavoritetButton';

export default function BranchCard({
    branchID,
    imageLogo,
    photoboothName,
    branchName,
    hashtag,
    myBranch,
    distance,
    elapsedTime,
}: BranchCardProps) {
    const [favorite, setFavorite] = useState<boolean>(myBranch);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const isFocused = useIsFocused();
    const route = useRoute();

    const onPressBranchCard = () => {
        const currentScreen = (route.params as { screen: ScreenName }).screen;
        if (isFocused) {
            navigation.push('Branch', { branchID, screen: currentScreen });
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
                                {photoboothName}
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
                    <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
                </BranchCardTop>
                <BranchCardHorizonLine />
                <BranchCardBottom>
                    <FontWhiteGreySmallestMedium>
                        내 위치로부터 {`${DistanceForm(distance)}`} ·
                    </FontWhiteGreySmallestMedium>
                    <FontWhiteGreySmallestMedium>약 {elapsedTime} 소요</FontWhiteGreySmallestMedium>
                </BranchCardBottom>
            </CardContainer>
        </TouchableCardContainer>
    );
}
