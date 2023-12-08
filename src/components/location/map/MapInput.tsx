import React from 'react';
import SearchImage from '../../../assets/image/reuse/search-grey.png';
import {MapInputProps} from '../../../interfaces/Location.interface';
import {SearchButtonIcon} from '../../../styles/layout/reuse/input/Search.style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';
import {Platform} from 'react-native';
import {
  BlockInput,
  InputForm,
  InputWrapper,
  MapInputContainer,
  MapInputhWrapper,
} from '../../../styles/layout/location/MapInput.style';
import {ScreenName} from '../../../interfaces/NavigationBar';

export default function MapInput({location}: MapInputProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const route = useRoute();
  const platform = Platform.OS;

  const onClickOpenModal = () => {
    const currentScreen = (route.params as {screen?: ScreenName})?.screen;
    navigation.push('LocationSearch', {screen: currentScreen});
  };

  return (
    <InputWrapper platform={platform}>
      <MapInputContainer>
        <MapInputhWrapper activeOpacity={0.7} onPress={onClickOpenModal}>
          <InputForm>
            <BlockInput
              value={location}
              editable={false}
              selectTextOnFocus={false}
            />
            <SearchButtonIcon source={SearchImage} />
          </InputForm>
        </MapInputhWrapper>
      </MapInputContainer>
    </InputWrapper>
  );
}
