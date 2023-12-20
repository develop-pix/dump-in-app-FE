import styled from 'styled-components/native';
import {colors} from '../../base/Variable';
import {Dimensions} from 'react-native';

export const OfficialDetailContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.lightblack};
`;

export const TitleContainer = styled.View`
  width: 100%;
`;
export const OfficialImageDetailFormContainer = styled.SafeAreaView`
  width: 100%;
  align-items: center;
`;

export const OfficialImageDetailForm = styled.View`
  width: 100%;
`;

export const OfficialImageDetailContainer = styled.View`
  width: 100%;
  background-color: ${colors.white};
`;

export const OfficialImageDetailImage = styled.Image`
  object-fit: scale-down;
  width: 100%;
  height: ${Dimensions.get('screen').height - 200}px;
`;
