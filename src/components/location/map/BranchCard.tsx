import { useState } from 'react';
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

    const onPressVisitBranch = async () => {
        /**FIXME: 아래 링크 수정 및 테스트 필요함 , 안드로이드에서 해당앱 설치 여부 확인하는 코드 필요함 */
        // safari 거치지 않고 바로 appStore 연결 itms-app://itunes.com/apps/dump_in_app_FE';
        const url = 'nmap://actionPath?parameter=value&appname=dump_in_app_FE';
        const appStoreUrl = 'https://apps.apple.com/kr/app/naver-map-navigation/id311867728';
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            Linking.openURL(url);
        } else {
            Linking.openURL(appStoreUrl);
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
                            {/* FIXME: 백엔드 API 변수 변경후 수정필요 */}
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
