import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ArrowBackIcon from 'assets/image/icon/arrow_back_white.svg';
import SeeMoreIcon from 'assets/image/icon/btn_more.svg';
import LocationIcon from 'assets/image/icon/location_white.svg';
import { ReviewDetailHeaderProps } from 'interfaces/reuse/header/ReviewDetailHeader.interface';
import {
    BranchNameContainer,
    CloseButtonWithBranchNameContainer,
    CloseImageContainer,
    ReviewDescTextContainer,
    ReviewManageButtonContainer,
} from 'styles/layout/reuse/header/ReviewDetailHeader';
import { FontWhiteNormalMedium } from 'styles/layout/reuse/text/Text.style';

export default function ReviewDetailHeader({
    photoBoothName,
    branchName,
    isMine,
    setOpenModal,
}: ReviewDetailHeaderProps) {
    const platform = Platform.OS;
    const navigation = useNavigation();
    const onPressClose = () => {
        navigation.goBack();
    };

    const onPressOpenModal = () => {
        setOpenModal(true);
    };

    return (
        <CloseButtonWithBranchNameContainer platform={platform}>
            <CloseImageContainer onPress={onPressClose}>
                <ArrowBackIcon width={16} height={16} />
            </CloseImageContainer>
            <BranchNameContainer>
                <LocationIcon width={20} height={24} />
                <ReviewDescTextContainer>
                    <FontWhiteNormalMedium>{photoBoothName}</FontWhiteNormalMedium>
                    <FontWhiteNormalMedium>{branchName}</FontWhiteNormalMedium>
                </ReviewDescTextContainer>
            </BranchNameContainer>
            {isMine ? (
                <ReviewManageButtonContainer onPress={onPressOpenModal}>
                    <SeeMoreIcon width={4} height={16} />
                </ReviewManageButtonContainer>
            ) : (
                <ReviewManageButtonContainer />
            )}
        </CloseButtonWithBranchNameContainer>
    );
}
