import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import BackIcon from '../../../assets/image/icon/arrow_back_white.svg';
import { BackModalProps } from '../../../interfaces/reuse/modal/BackModal.interface';
import {
    BackImageContainer,
    CloseModalButtonContainer,
} from '../../../styles/layout/reuse/button/CloseModalButton.style';

export default function CloseModalButton({ setModal }: BackModalProps) {
    const platform = Platform.OS;

    const onClickCloseModal = () => {
        setModal(false);
    };

    return (
        <CloseModalButtonContainer platform={platform}>
            <TouchableOpacity onPress={onClickCloseModal}>
                <BackImageContainer>
                    <BackIcon width={16} height={16} />
                </BackImageContainer>
            </TouchableOpacity>
        </CloseModalButtonContainer>
    );
}
