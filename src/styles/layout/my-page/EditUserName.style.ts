import styled from 'styled-components/native';

import { colors, fontFamily, fontSize, fontWeight } from 'styles/base/Variable';

export const EditUserNameContainer = styled.View`
    padding: 24px;
`;

export const UserNickNameWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 10px 5px;
`;

export const EditIconContainer = styled.View`
    margin-left: 20px;
    margin-top: 5px;
`;

export const EditNickName = styled.TextInput`
    color: ${colors.white};
    font-size: ${fontSize.biggest};
    font-weight: ${fontWeight.semibold};
    font-family: ${fontFamily.Pretendard};
    background-color: ${colors.darkgrey};
    padding: 5px 10px;
    border-radius: 7px;
`;

export const UserIDWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 5px;
`;

export const CompleteButton = styled.TouchableOpacity`
    margin-left: 20px;
`;
