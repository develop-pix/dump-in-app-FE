import {TouchableOpacity} from 'react-native';
import React from 'react';
import {BackModalProps} from '../../../interfaces/reuse/modal/BackModal.interface';
import {
  BackImage,
  BackModalWrapper,
} from '../../../styles/layout/reuse/modal/BackModal';
import BackIcon from '../../../assets/image/reuse/arrow_back.png';

export default function BackModal({setModal}: BackModalProps) {
  const onClickCloseModal = () => {
    setModal(false);
  };

  return (
    <BackModalWrapper>
      <TouchableOpacity onPress={onClickCloseModal}>
        <BackImage source={BackIcon} />
      </TouchableOpacity>
    </BackModalWrapper>
  );
}
