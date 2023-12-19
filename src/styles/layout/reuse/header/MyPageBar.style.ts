import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MyPageGoBackButtonContainerWithSafeArea = styled.View<{
  platform: 'ios' | 'android' | 'web' | 'windows' | 'macos';
}>`
  display: flex;
  justify-content: center;
  height: 44px;
  margin-top: ${props =>
    props.platform === 'ios'
      ? '0px'
      : props.platform === 'android'
      ? '15px'
      : null};
`;

export const MyPageMenuButtonContainerWithSafeArea = styled.TouchableOpacity<{
  platform: 'ios' | 'android' | 'web' | 'windows' | 'macos';
}>`
  display: flex;
  justify-content: center;
  height: 44px;
  margin-top: ${props =>
    props.platform === 'ios'
      ? '0px'
      : props.platform === 'android'
      ? '15px'
      : null};
`;

export const MenuIconContainer = styled.View`
  margin-right: 20px;
`;
