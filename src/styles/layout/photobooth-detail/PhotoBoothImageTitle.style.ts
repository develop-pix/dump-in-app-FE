import styled from 'styled-components/native';
import {colors} from '../../base/Variable';

export const PhotoBoothImageTitleContainer = styled.View`
  position: relative;
`;

export const PhotoBoothImageContentContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const PhotoBoothImage = styled.ImageBackground`
  width: 100%;
  height: 500px;
  background-color: ${colors.white};
`;

export const ContentsContainer = styled.View`
  justify-content: flex-end;
  flex: 1;
  padding: 20px 20px 0px 20px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const NomalButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;
