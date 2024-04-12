import { useState } from 'react';
import { Linking, Platform } from 'react-native';
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
    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;
    // const { latitude, longitude } = useAppSelector(state => state.location);

    /** TODO: 위도, 경도, 이름 옵션 변경 */
    // nmap://route/walk?slat=37.4640070&slng=126.9522394&sname=%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90&dlat=37.4764356&dlng=126.9618302&dname=%EB%8F%99%EC%9B%90%EB%82%99%EC%84%B1%EB%8C%80%EC%95%84%ED%8C%8C%ED%8A%B8&appname=com.example.myapp
    const GOOGLE_PLAY_STORE_LINK =
        'nmap://place?lat=37.3677345&lng=127.1083617&name=인생네컷&appname=com.dump_in_app_fe';
    const GOOGLE_PLAY_STORE_WEB_LINK = 'market://details?id=com.nhn.android.nmap';

    // safari 거치지 않고 바로 appStore 연결 itms-app://itunes.com/apps/dump_in_app_FE';
    const APPLE_APP_STORE_LINK = 'nmap://map?&appname=org.reactjs.native.example.dump-in-app-FE';
    const APPLE_APP_STORE_WEB_LINK = 'https://apps.apple.com/kr/app/naver-map-navigation/id311867728';

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
        if (Platform.OS === 'android') {
            linkingNaverMap(GOOGLE_PLAY_STORE_LINK, GOOGLE_PLAY_STORE_WEB_LINK);
        } else {
            linkingNaverMap(APPLE_APP_STORE_LINK, APPLE_APP_STORE_WEB_LINK);
        }
    };

    const linkingNaverMap = async (url: string, webURL: string) => {
        // FIXME: 아래 링크 수정 및 테스트 필요함 , 안드로이드에서 해당앱 설치 여부 확인하는 코드 필요함
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            Linking.openURL(url);
        } else {
            Linking.openURL(webURL);
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
