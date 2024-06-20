import { useState } from 'react';
import { Linking, Platform } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import NextButtonSmall from 'assets/image/icon/btn_next_small.svg';
import FavoriteButton from 'components/reuse/button/FavoriteButton';
import ConfirmationAlertModal from 'components/reuse/modal/ConfirmationAlertModal';
import { LikeBranch } from 'hooks/axios/Branch';
import { useAppSelector } from 'hooks/redux/store';
import { BranchCardProps } from 'interfaces/Location.interface';
import { LocationStackScreenProps, RootStackScreenProps } from 'interfaces/Navigation.interface';
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
    FontWhiteGreySmallerMedium,
    FontWhiteGreySmallerSemibold,
    FontYellowSmallerMediumWithLineSpacing,
} from 'styles/layout/reuse/text/Text.style';
import { TagsArrayToHashTagArrayForm } from 'utils/FormChange';

export default function BranchCard({
    id,
    imageLogo,
    photoBoothName,
    location,
    hashtag,
    isLiked,
    distance,
    branchLatitude,
    branchLongitude,
}: BranchCardProps) {
    const [favorite, setFavorite] = useState(isLiked);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const navigation = useNavigation<
        LocationStackScreenProps<'Location'>['navigation'] | RootStackScreenProps<'MainTab'>['navigation']
    >();
    const isFocused = useIsFocused();
    const isLoggedIn = useAppSelector(state => state.login).isLoggedIn;
    const { latitude, longitude } = useAppSelector(state => state.location);

    const GOOGLE_PLAY_STORE_LINK = `nmap://route/walk?slat=${latitude}&slng=${longitude}&sname=내 위치&dlat=${branchLatitude}&dlng=${branchLongitude}&dname=${photoBoothName + ' ' + location}&appname=com.dump_in_app_fe`;
    const GOOGLE_PLAY_STORE_WEB_LINK = 'market://details?id=com.nhn.android.nmap';

    const APPLE_APP_STORE_LINK = `nmap://route/walk?slat=${latitude}&slng=${longitude}&sname=내 위치&dlat=${branchLatitude}&dlng=${branchLongitude}&dname=${photoBoothName + ' ' + location}&appname=org.reactjs.native.example.dump-in-app-FE`;
    const APPLE_APP_STORE_WEB_LINK = 'https://apps.apple.com/kr/app/naver-map-navigation/id311867728';

    /** Branch 페이지 이동 */
    const onPressBranchCard = () => {
        if (isFocused) {
            (navigation as LocationStackScreenProps<'Location'>['navigation']).navigate('Branch', { branchID: id });
        }
    };

    /** 하트 버튼 클릭시 */
    const onPressBranchLikeButton = async () => {
        if (isLoggedIn) {
            const press_result = await LikeBranch(id);
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
        (navigation as RootStackScreenProps<'MainTab'>['navigation']).navigate('Login');
    };

    /** 네이버 지도 연결 */
    const onPressVisitBranch = async () => {
        if (Platform.OS === 'android') {
            linkingNaverMap(GOOGLE_PLAY_STORE_LINK, GOOGLE_PLAY_STORE_WEB_LINK);
        } else {
            linkingNaverMap(APPLE_APP_STORE_LINK, APPLE_APP_STORE_WEB_LINK);
        }
    };

    const linkingNaverMap = async (url: string, webURL: string) => {
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
                            <FontWhiteGreySmallerSemibold>{location}</FontWhiteGreySmallerSemibold>
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
                    <FontWhiteGreySmallerMedium>내 위치로부터 {distance} </FontWhiteGreySmallerMedium>
                    <BranchCardAppScheme onPress={onPressVisitBranch}>
                        <FontWhiteGreySmallerMedium>방문하기</FontWhiteGreySmallerMedium>
                        <NextButtonSmall />
                    </BranchCardAppScheme>
                </BranchCardBottom>
            </CardContainer>
            <ConfirmationAlertModal
                isVisible={isModalVisible}
                title="로그인이 필요합니다.  로그인 하시겠습니까?"
                agreeMessage="확인"
                disagreeMessage="취소"
                onAgree={onPressLogin}
                onDisagree={() => setIsModalVisible(false)}
            />
        </TouchableCardContainer>
    );
}
