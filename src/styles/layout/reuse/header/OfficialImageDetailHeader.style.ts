import styled from 'styled-components/native';

//platform이 ios일 경우, android일 경우, 나머지 일경우 분리
export const OfficialImageDetailHeaderContainer = styled.View<{
  platform: 'web' | 'ios' | 'android' | 'windows' | 'macos';
}>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 44px;
  gap: 120px;
  margin-top: ${props =>
    props.platform === 'ios'
      ? '0px'
      : props.platform === 'android'
      ? '10px'
      : null};
  margin-bottom: 10px;
`;

export const CloseImageContainer = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
`;

export const BrnachNameTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 3px;
`;

export const BranchNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ReviewManageButtonContainer = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
`;
