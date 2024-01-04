import Modal from 'react-native-modal';

import { ConfirmationAlertModalProps } from 'interfaces/reuse/modal/ConfirmationAlertModal.interface';
import {
    ButtonContainer,
    ConfirmationAlertModalContainer,
    CustomButton,
    ModalWrapper,
} from 'styles/layout/reuse/modal/ConfirmationAlertModal.style';
import { FontWhiteNormalMedium, FontWhiteNormalSemibold } from 'styles/layout/reuse/text/Text.style';

export default function ConfirmationAlertModal({
    isVisible,
    title,
    agreeMessage,
    disagreeMessage,
    onAgree,
    onDisagree,
}: ConfirmationAlertModalProps) {
    return (
        <Modal
            isVisible={isVisible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.5}
            useNativeDriver={true}>
            <ConfirmationAlertModalContainer>
                <ModalWrapper>
                    <FontWhiteNormalSemibold>{title}</FontWhiteNormalSemibold>
                    <ButtonContainer>
                        <CustomButton onPress={onDisagree}>
                            <FontWhiteNormalMedium>{disagreeMessage}</FontWhiteNormalMedium>
                        </CustomButton>

                        <CustomButton onPress={onAgree}>
                            <FontWhiteNormalMedium>{agreeMessage}</FontWhiteNormalMedium>
                        </CustomButton>
                    </ButtonContainer>
                </ModalWrapper>
            </ConfirmationAlertModalContainer>
        </Modal>
    );
}
