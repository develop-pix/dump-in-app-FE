import {TouchableOpacity} from 'react-native';
import React from 'react';
import {BackModalProps} from '../../../interfaces/reuse/modal/BackModal.interface';
import {
  BackImage,
  CloseModalButtonContainer,
} from '../../../styles/layout/reuse/Button/CloseModalButton.style';
import BackIcon from '../../../assets/image/reuse/arrow_back.png';

export default function CloseModalButton({setModal}: BackModalProps) {
  const onClickCloseModal = () => {
    setModal(false);
  };

  return (
    <CloseModalButtonContainer>
      <TouchableOpacity onPress={onClickCloseModal}>
        <BackImage source={BackIcon} />
      </TouchableOpacity>
    </CloseModalButtonContainer>
  );
}
