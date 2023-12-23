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
export const OfficialImageDetailFormContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const OfficialImageDetailForm = styled.View`
  width: 100%;
`;

export const OfficialImageDetailContainer = styled.ScrollView`
  background-color: ${colors.white};
`;

export const OfficialImageDetailImage = styled.Image`
  object-fit: scale-down;
  width: ${Dimensions.get('screen').width}px;
  height: ${Dimensions.get('screen').height - 200}px;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  top: 300px;
  width: 100%;
`;

export const PrevButtonContainer = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`;
export const NextButtonContainer = styled.TouchableOpacity`
  position: absolute;
  right: 0;
`;
