import styled from 'styled-components/native';
import {colors} from '../../base/Variable';
import {Dimensions, TouchableOpacity} from 'react-native';

/* page */
export const LocationContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.white};
`;

/* Map */

export const MapContainer = styled.View<{
  platform: 'web' | 'ios' | 'android' | 'windows' | 'macos';
}>`
  display: flex;
  height: ${props =>
    props.platform === 'ios'
      ? Dimensions.get('window').height - 90
      : props.platform === 'android'
      ? Dimensions.get('window').height - 110
      : null}px;
`;

/* MapInput */

//인풋 위치 수정하기
export const InputWrapper = styled.View<{
  platform: 'web' | 'ios' | 'android' | 'windows' | 'macos';
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: ${props =>
    props.platform === 'ios' ? 70 : props.platform === 'android' ? 40 : null}px;
`;
export const MapInputContainer = styled.View`
  width: 90%;
`;

export const MapInputhWrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 46px;
  background-color: ${colors.white};
  border-radius: 10px;
`;

export const InputForm = styled.View`
  display: flex;
  height: 46px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BlockInput = styled.TextInput`
  margin-left: 10px;
  color: ${colors.second_grey};
`;

/* ResetLocationButton */

export const ResetLocationButtonContainer = styled.View`
  position: absolute;
  right: 10px;
  bottom: 230px;
  border-radius: 50px;
`;

export const ResetLocation = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
`;

export const ResetLocationImage = styled.Image`
  width: 44px;
  height: 44px;
`;

/* BranchCard */

export const BranchCardContainer = styled.View`
  position: absolute;
  bottom: 50px;
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CarouselContainer = styled.ScrollView`
  width: 100%;
`;

export const Card = styled.View`
  width: ${Dimensions.get('window').width * 0.9}px;
  align-items: center;
  margin-left: ${Dimensions.get('window').width * 0.01}px;
  margin-right: ${Dimensions.get('window').width * 0.01}px;
`;

export const TouchableCardContainer = styled.TouchableOpacity`
  border-radius: 10px;
  width: 100%;
  height: 160px;
  background-color: ${colors.fifth_grey};
  padding: 20px 0px 20px 0px;
  align-items: center;
`;

export const CardContainer = styled.View`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const BranchCardTop = styled.View`
  display: flex;
  padding-bottom: 10px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const BranchCardLogo = styled.Image`
  width: 44px;
  height: 44px;
`;

export const BranchCardDescription = styled.View`
  diplay: flex;
  width: 70%;
`;

export const BranchCardBranchNameWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: center;
`;

export const BranchCardHashtag = styled.View`
  flex-direction: row;
  gap: 3px;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const BranchCardHorizonLine = styled.View`
  border: 1px solid ${colors.fourth_grey};
`;

export const BranchCardBottom = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
