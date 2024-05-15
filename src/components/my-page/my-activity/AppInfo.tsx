import { useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    FontWhiteNormalMedium,
} from 'styles/layout/reuse/text/Text.style';

import { OpenSourceLicense } from './../../../../OpenSourceLicense';

export default function AppInfo() {
    const navigation = useNavigation<MyPageStackScreenProps<'MyPage'>['navigation']>();

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
                        <FontLightGreyNormalMedium>ver 1.0</FontLightGreyNormalMedium>
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
