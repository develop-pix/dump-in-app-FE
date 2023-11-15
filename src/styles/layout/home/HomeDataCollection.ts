import styled from 'styled-components/native';

export const CollectContainer = styled.View`
  flex: 1;
`;

export const CollectionScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {paddingBottom: 100},
})``;

export const UpScrollImageBox = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  position: absolute;
  right: 10px;
  top: 88%;
  transform: translateY(-50px);
  z-index: 999;
  elevation: 999;
`;
