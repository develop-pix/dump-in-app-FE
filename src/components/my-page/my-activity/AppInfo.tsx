import { useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getVersion } from 'react-native-device-info';

import GoBackButton from 'components/reuse/button/GoBackButton';
import { OpenSourceLicenseType } from 'interfaces/MyPage.interface';
import { MyPageStackScreenProps } from 'interfaces/Navigation.interface';
import {
    AppInfoContainer,
    AppInfoSafeContainer,
    AppInfoTextContainer,
    AppMenuItemContainer,
    LicenseInfoDescContainer,
    LicenseInfoTextContainer,
} from 'styles/layout/my-page/MyActivity/AppInfo.style';
import { HeaderLeftContainer, RowContainer } from 'styles/layout/reuse/header/Header.style';
import {
    FontLightGreyNormalMedium,
    FontWhiteGreyBiggerSemibold,
    FontWhiteGreySmallestMedium,
    FontWhiteNormalMedium,
} from 'styles/layout/reuse/text/Text.style';

import { OpenSourceLicense } from './../../../../OpenSourceLicense';

export default function AppInfo() {
    const navigation = useNavigation<MyPageStackScreenProps<'MyPage'>['navigation']>();
    const currentVersion = getVersion();

    /** FlatList renderItem */
    const renderItem = useCallback(({ item }: { item: OpenSourceLicenseType }) => {
        return (
            <LicenseInfoDescContainer>
                <FontLightGreyNormalMedium>{item.libraryName}</FontLightGreyNormalMedium>
                <FontLightGreyNormalMedium>{item.homepage}</FontLightGreyNormalMedium>
                {item._licenseContent ? (
                    <FontLightGreyNormalMedium>{item._licenseContent}</FontLightGreyNormalMedium>
                ) : (
                    <FontLightGreyNormalMedium>{item._license}</FontLightGreyNormalMedium>
                )}
            </LicenseInfoDescContainer>
        );
    }, []);

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <HeaderLeftContainer>
                        <GoBackButton />
                    </HeaderLeftContainer>
                );
            },
            headerTitle: () => {
                return (
                    <RowContainer>
                        <FontWhiteNormalMedium>앱 정보</FontWhiteNormalMedium>
                    </RowContainer>
                );
            },
        });
    }, [navigation]);

    return (
        <AppInfoSafeContainer>
            <AppInfoContainer>
                <AppMenuItemContainer>
                    <AppInfoTextContainer>
                        <FontWhiteGreyBiggerSemibold>버전 정보</FontWhiteGreyBiggerSemibold>
                    </AppInfoTextContainer>
                    <AppInfoTextContainer>
                        <FontLightGreyNormalMedium>ver {currentVersion}</FontLightGreyNormalMedium>
                        {/* TODO: 추후 react-native-version-check로 업데이트 확인 */}
                        {/* <FontRedSmallestMedium>업데이트가 필요합니다.</FontRedSmallestMedium> */}
                        <FontWhiteGreySmallestMedium>최신 버전입니다.</FontWhiteGreySmallestMedium>
                    </AppInfoTextContainer>
                </AppMenuItemContainer>

                <LicenseInfoTextContainer>
                    <FontWhiteGreyBiggerSemibold>오픈 라이선스</FontWhiteGreyBiggerSemibold>
                    <FlatList
                        data={OpenSourceLicense}
                        renderItem={({ item }) => renderItem({ item })}
                        keyExtractor={item => item.libraryName}
                        showsVerticalScrollIndicator={false}
                    />
                </LicenseInfoTextContainer>
            </AppInfoContainer>
        </AppInfoSafeContainer>
    );
}
