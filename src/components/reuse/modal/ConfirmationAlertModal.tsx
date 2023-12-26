import React from 'react';
import {Modal} from 'react-native';
import {
  ConfirmationAlertModalContainer,
  ModalWrapper,
  CustomButton,
  ButtonContainer,
} from '../../../styles/layout/reuse/modal/ConfirmationAlertModal.style';
import {
  FontWhiteNormalSemibold,
  FontWhiteNormalMedium,
} from '../../../styles/layout/reuse/text/Text.style';
import {ConfirmationAlertModalProps} from '../../../interfaces/reuse/modal/ConfirmationAlertModal.interface';

export default function ConfirmationAlertModal({
  isVisible,
  title,
  agreeMessage,
  disagreeMessage,
  onAgree,
  onDisagree,
}: ConfirmationAlertModalProps) {
  return (
    <Modal visible={isVisible} transparent animationType="slide">
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
