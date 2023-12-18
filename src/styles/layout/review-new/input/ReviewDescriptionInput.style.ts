import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../../base/Variable';

export const ReviewDescriptionInputContainer = styled.View`
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

export const ReviewDescriptionTextInputContainer = styled.View`
  position: relative;
  background-color: ${colors.blackgrey};
  border-radius: 10px;
`;

export const ReviewDescriptionTextInput = styled.TextInput<{
  platform: 'web' | 'ios' | 'android' | 'windows' | 'macos';
}>`
  width: 80%;
  color: ${colors.white};
  font-size: ${fontSize.normal};
  font-weight: ${fontWeight.medium};
  line-height: 16px;
  padding-top: ${props =>
    props.platform === 'ios'
      ? '15px'
      : props.platform === 'android'
      ? '10px'
      : null};
  padding-bottom: ${props =>
    props.platform === 'ios'
      ? '15px'
      : props.platform === 'android'
      ? '7px'
      : null};
  padding-left: 10px;
  padding-right: 10px;
`;

export const ReviewDescriptionCount = styled.View`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
