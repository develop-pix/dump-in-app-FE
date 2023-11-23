import styled from 'styled-components/native';
import {colors} from '../../base/Variable';
import {Dimensions} from 'react-native';

export const ReviewDetailContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.black};
`;

export const TitleContainer = styled.View`
  width: 100%;
`;
export const ReviewDetailFormContainer = styled.SafeAreaView`
  width: 100%;
  align-items: center;
`;

export const ReviewDetailFormWrapper = styled.View`
  width: 100%;
`;

export const ReviewImageContainer = styled.View`
  width: 100%;
  height: ${Dimensions.get('window').height - 44}px;
  background-color: ${colors.white};
`;

export const ReviewImage = styled.Image`
  object-fit: scale-down;
  width: 100%;
  height: ${Dimensions.get('window').height - 88}px;
`;

/* left: ReviewContainer width의 1/2 */
export const ReviewDescriptionContainer = styled.View<{
  platform: 'web' | 'ios' | 'android' | 'windows' | 'macos';
}>`
  display: flex;
  gap: 10px;
  width: 90%;
  position: absolute;
  bottom: ${props =>
    props.platform === 'ios'
      ? '170px'
      : props.platform === 'android'
      ? '140px'
      : null};
  left: ${Dimensions.get('window').width * 0.05}px;
`;

export const ReviewDescTop = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewDescMiddle = styled.View`
  gap: 10px;
`;

export const SeeMoreContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const ReviewDescBottom = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ReviewDetailForm = styled.View`
  width: 100%;
  height: ${Dimensions.get('window').height}px;
`;
