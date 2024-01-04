import styled from 'styled-components/native';

import { colors } from 'styles/base/Variable';

export const ConfirmationAlertModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 90%;
`;

export const ModalWrapper = styled.View`
    width: 95%;
    height: 200px;
    background-color: ${colors.darkgrey};
    border-radius: 10px;
    padding: 20px;
    align-items: center;
    justify-content: center;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-top: 50px;
    gap: 10px;
`;

export const CustomButton = styled.TouchableOpacity`
    width: 142px;
    height: 43px;
    background-color: ${colors.blackgrey};
    border-radius: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
`;
