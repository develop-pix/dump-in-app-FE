import styled from 'styled-components/native';
import {colors, fontSize, fontWeight} from '../../base/Variable';

export const EventItemContainer = styled.TouchableOpacity`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
`;

// 임시 배경색 설정
export const EventImageWrapper = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 10px;
  background-color: ${colors.first_grey};
`;

export const EventImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const FavoirteIcon = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const EventInfo = styled.View`
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 5px;
`;

export const PhotoBoothNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const LocationIcon = styled.Image`
  width: 18px;
  height: 21px;
  margin-right: 2px;
`;

export const EventTitle = styled.Text`
  font-size: ${fontSize.H1};
  font-weight: ${fontWeight.SB};
  color: ${colors.white};
  margin-bottom: 5px;
`;
