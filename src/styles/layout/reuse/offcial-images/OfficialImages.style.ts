import styled from 'styled-components/native';

/* Official */

export const OfficialContainer = styled.View`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const SubTitleContainer = styled.View`
  width: 90%;
`;

export const OfficialImagesContainer = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 11px;
  flex-wrap: wrap;
`;

export const OfficialImageWrapper = styled.View`
  width: 48%;
`;

export const OfficialImage = styled.Image`
  width: 100%;
  border-radius: 10px;
`;
