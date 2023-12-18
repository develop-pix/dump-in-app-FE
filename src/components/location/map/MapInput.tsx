import React from 'react';
import SearchImage from '../../../assets/image/reuse/search-grey.png';
import {MapInputProps} from '../../../interfaces/Location.interface';
import {SearchButtonIcon} from '../../../styles/layout/reuse/input/Search.style';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
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
import {colors} from '../../../styles/base/Variable';

export default function MapInput({location}: MapInputProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const isFocused = useIsFocused();
  const route = useRoute();
  const platform = Platform.OS;

  const onPressLocationSearch = () => {
    const currentScreen = (route.params as {screen: ScreenName}).screen;
    if (isFocused) {
      navigation.push('LocationSearch', {
        NextPage: 'BranchDetail',
        screen: currentScreen,
      });
    }
  };

  return (
    <InputWrapper platform={platform}>
      <MapInputContainer>
        <MapInputhWrapper
          activeOpacity={1}
          onPress={onPressLocationSearch}
          platform={platform}
          style={{
            shadowRadius: 6,
            shadowOffset: {height: 2, width: 0},
            shadowColor: colors.black,
            shadowOpacity: 0.15,
          }}>
          <InputForm>
            <BlockInput
              value={location}
              editable={false}
              selectTextOnFocus={false}
              onPressIn={onPressLocationSearch}
            />
            <SearchButtonIcon source={SearchImage} />
          </InputForm>
        </MapInputhWrapper>
      </MapInputContainer>
    </InputWrapper>
  );
}
