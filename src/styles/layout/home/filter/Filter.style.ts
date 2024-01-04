import styled from 'styled-components/native';

import { colors, fontFamily, fontSize, fontWeight } from 'styles/base/Variable';

// 필터 내용 컨테이너 스타일
export const FilterContentContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 10px 0px 15px 0px;
`;

// 필터 텍스트 버튼 스타일 ex) 지역, 인원, 컨셉, 소품 버튼
export const FilterTextButton = styled.TouchableOpacity<{
    isSelected: boolean;
    buttonWidth?: number; // 값이 없으면 Hug, 고정 값이면 Fixed 적용
}>`
    width: ${({ buttonWidth }) => (buttonWidth ? `${buttonWidth}px` : 'auto')};
    height: 36px;
    padding: 4px 14px 4px 14px;
    margin: 5px;
    border-radius: 8px;
    background-color: ${({ isSelected }) => (isSelected ? colors.white : colors.blackgrey)};
    justify-content: center;
`;

// 필터 텍스트 버튼 안의 텍스트 스타일
export const FilterTextButtonContent = styled.Text<{ isSelected: boolean }>`
    color: ${({ isSelected }) => (isSelected ? colors.black : colors.lightgrey)};
    font-size: ${fontSize.smaller};
    font-weight: ${({ isSelected }) => (isSelected ? fontWeight.semibold : fontWeight.medium)};
    font-family: ${fontFamily.Pretendard};
`;
