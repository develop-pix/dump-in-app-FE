import React from 'react';
import {
  BlockInput,
  InputWrapper,
  MapInputhWrapper,
  InputForm,
  MapInputContainer,
} from '../../../styles/layout/location/Map.style';
import SearchImage from '../../../assets/image/reuse/search-grey.png';
import {MapInputProps} from '../../../interfaces/Location.interface';
import {SearchButtonIcon} from '../../../styles/layout/reuse/input/Search.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParam} from '../../../interfaces/NavigationBar';

export default function MapInput({location}: MapInputProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const onClickOpenModal = () => {
    navigation.push('LocationSearch');
  };

  return (
    <InputWrapper>
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
