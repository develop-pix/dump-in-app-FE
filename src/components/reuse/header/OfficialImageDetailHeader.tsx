import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ArrowBackIcon from 'assets/image/icon/arrow_back_white.svg';
import { OfficialImageDetailHeaderProps } from 'interfaces/reuse/header/OfficialImageDetailHeader.interface';
import {
    BranchNameContainer,
    BranchNameTextContainer,
    CloseImageContainer,
    OfficialImageDetailHeaderContainer,
} from 'styles/layout/reuse/header/OfficialImageDetailHeader.style';
import { FontWhiteNormalMedium } from 'styles/layout/reuse/text/Text.style';

export default function OfficialImageDetailHeader({ photoBoothName }: OfficialImageDetailHeaderProps) {
    const platform = Platform.OS;
    const navigation = useNavigation();
    const onPressClose = () => {
        navigation.goBack();
    };

    return (
        <OfficialImageDetailHeaderContainer platform={platform}>
            <CloseImageContainer onPress={onPressClose}>
                <ArrowBackIcon width={16} height={16} />
            </CloseImageContainer>
            <BranchNameContainer>
                <BranchNameTextContainer>
                    <FontWhiteNormalMedium>{photoBoothName}</FontWhiteNormalMedium>
                </BranchNameTextContainer>
            </BranchNameContainer>
        </OfficialImageDetailHeaderContainer>
    );
}
