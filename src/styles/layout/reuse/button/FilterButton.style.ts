import styled from 'styled-components/native';

import { fontFamily, fontSize, fontWeight } from 'styles/base/Variable';

export const FilterButtonContainer = styled.TouchableOpacity<{
    backgroundColor: string;
    borderColor: string;
}>`
    border-radius: 10px;
    border-width: 1px;
    width: 162px;
    height: 43px;
    justify-content: center;
    align-items: center;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-color: ${({ borderColor }) => borderColor};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const FilterButtonText = styled.Text<{
    textColor: string;
}>`
    font-size: ${fontSize.normal};
    font-weight: ${fontWeight.semibold};
    font-family: ${fontFamily.Pretendard};
    text-align: center;
    color: ${({ textColor }) => textColor};
`;
