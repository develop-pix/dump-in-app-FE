import { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import FavoriteButton from 'components/reuse/button/FavoriteButton';
import { LikeBranch } from 'hooks/axios/Branch';
import { useAppSelector } from 'hooks/redux/store';
import { BranchCardProps } from 'interfaces/Location.interface';
import { LocationStackScreenProps } from 'interfaces/Navigation.interface';
import {
    BranchCardAppScheme,
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
    id,
    imageLogo,
    photoBoothName,
    branchName,
    hashtag,
    isLiked,
    distance,
}: BranchCardProps) {
    const [favorite, setFavorite] = useState<boolean>(isLiked);
    const navigation = useNavigation<LocationStackScreenProps<'Branch'>['navigation']>();
    const isFocused = useIsFocused();
    const isLoggedIn = useAppSelector(state => state.userData).isLoggedIn;
    // const { latitude, longitude } = useAppSelector(state => state.location);

    /** Branch 페이지 이동 */
    const onPressBranchCard = () => {
        if (isFocused) {
            navigation.navigate('Branch', { branchID: id });
        }
    };

    /** 하트 버튼 클릭시 */
    const onPressBranchLikeButton = async () => {
        if (isLoggedIn) {
            const press_result = await LikeBranch(id);
            if (press_result.success) {
                setFavorite(prev => !prev);
            }
        }
    };

    const onPressVisitBranch = () => {
        // Get the deep link used to open the app
        // Linking.getInitialURL().then(async res => {
        //     if (res) {
        //         console.log('res');
        //         console.log(res);
        //         const supported = await Linking.canOpenURL(res);
        //         if (supported) {
        //             Linking.openURL(
        //                 `nmap://route/walk?slat=37.4640070&slng=126.9522394&sname=%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90&dlat=37.4764356&dlng=126.9618302&dname=%EB%8F%99%EC%9B%90%EB%82%99%EC%84%B1%EB%8C%80%EC%95%84%ED%8C%8C%ED%8A%B8&appname=org.reactjs.native.example.dump-in-app-FE`,
        //             );
        //         }
        //     } else {
        //         console.log('res');
        //         console.log(res);
        //     }
        // });
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
                    <FavoriteButton favorite={favorite} onPress={onPressBranchLikeButton} />
                </BranchCardTop>
                <BranchCardHorizonLine />
                <BranchCardBottom>
                    <FontWhiteGreySmallestMedium>내 위치로부터 {distance} · </FontWhiteGreySmallestMedium>
                    <BranchCardAppScheme onPress={onPressVisitBranch}>
                        <FontWhiteGreySmallestMedium>방문하기</FontWhiteGreySmallestMedium>
                    </BranchCardAppScheme>
                </BranchCardBottom>
            </CardContainer>
        </TouchableCardContainer>
    );
}
