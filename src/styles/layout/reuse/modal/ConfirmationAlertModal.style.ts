import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const ConfirmationAlertModalContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

export const ModalWrapper = styled.View`
    width: 100%;
    background-color: ${colors.darkgrey};
    border-radius: 10px;
    padding: 20px;
    padding-top: 52px;
    align-items: center;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    margin-top: 52px;
    gap: 10px;
`;

export const CustomButton = styled.TouchableOpacity`
    width: 142px;
    height: 44px;
    background-color: ${colors.blackgrey};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;
