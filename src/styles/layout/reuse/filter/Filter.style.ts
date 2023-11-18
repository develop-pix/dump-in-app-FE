import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../../base/Variable';

// 필터 타이틀 스타일 ex) 프레임 컬러, 지역...
export const FilterTitle = styled.Text`
  color: ${colors.first_grey};
  font-size: ${fontSize.H5};
  font-weight: ${fontWeight.SB};
  margin-bottom: 10px;
`;

// 필터 내용 컨테이너 스타일
export const FilterContentContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 15px;
`;

// 필터 텍스트 버튼 스타일 ex) 지역, 인원, 컨셉, 소품 버튼
export const FilterTextButton = styled.TouchableOpacity<{
  isSelected: boolean;
  buttonWidth?: number; // 값이 없으면 Hug, 고정 값이면 Fixed 적용
}>`
  width: ${({buttonWidth}) => (buttonWidth ? `${buttonWidth}px` : 'auto')};
  height: 36px;
  padding: 4px 14px 4px 14px;
  margin: 5px;
  border-radius: 8px;
  background-color: ${({isSelected}) =>
    isSelected ? colors.white : colors.fourth_grey};
  justify-content: center;
`;

// 필터 텍스트 버튼 안의 텍스트 스타일
export const FilterTextButtonContent = styled.Text<{isSelected: boolean}>`
  color: ${({isSelected}) => (isSelected ? colors.black : colors.second_grey)};
  font-size: ${({isSelected}) => (isSelected ? fontSize.B1 : fontSize.B2)};
  font-weight: ${({isSelected}) => (isSelected ? fontWeight.SB : fontWeight.M)};
`;
