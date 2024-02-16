import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import BackIcon from 'assets/image/icon/arrow_back_white.svg';
import {
    setBranchID,
    setCameraShot,
    setDate,
    setDescription,
    setFrameColor,
    setHairIron,
    setHashtag,
    setImageClear,
    setParty,
    setPublicOpen,
    setRepresentativeImage,
    setTools,
} from 'hooks/redux/BranchReviewEdit';
import { useAppDispatch } from 'hooks/redux/store';
import { HeaderIconContainer } from 'styles/layout/reuse/header/Header.style';

import ConfirmationAlertModal from '../reuse/modal/ConfirmationAlertModal';

export default function ReviewGoBackButton() {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const [openCloseModal, setOpenCloseModal] = useState<boolean>(false);

    /** BackButton 클릭시 redux 내용 초기화 */
    const onPressGoHome = () => {
        dispatch(setRepresentativeImage({ imageURL: undefined, imageName: undefined }));
        dispatch(setImageClear());
        dispatch(setDescription(null));
        dispatch(setBranchID(undefined));
        dispatch(setDate(null));
        dispatch(setFrameColor(null));
        dispatch(setParty(null));
        dispatch(setCameraShot(null));
        dispatch(setHashtag([]));
        dispatch(setTools(null));
        dispatch(setHairIron(null));
        dispatch(setPublicOpen(true));

        setOpenCloseModal(false);
        navigation.goBack();
    };

    return (
        <HeaderIconContainer onPress={() => setOpenCloseModal(true)}>
            <BackIcon width={16} height={16} />
            <ConfirmationAlertModal
                isVisible={openCloseModal}
                title="리뷰 작성을 취소하시겠어요?"
                agreeMessage="작성취소"
                disagreeMessage="아니요"
                onAgree={onPressGoHome}
                onDisagree={() => setOpenCloseModal(false)}
            />
        </HeaderIconContainer>
    );
}
