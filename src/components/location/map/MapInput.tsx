import React, {useState} from 'react';
import {
  BlockInput,
  InputWrapper,
  MapInputhWrapper,
  InputForm,
  MapInputContainer,
} from '../../../styles/layout/location/Map.style';
import SearchImage from '../../../assets/image/reuse/search-grey.png';
import {MapInputProps} from '../../../interfaces/Location.interface';
import LoactionSearch from '../search/LoactionSearch';
import {SearchButtonIcon} from '../../../styles/layout/reuse/input/Search.style';

export default function MapInput({location, setLocation}: MapInputProps) {
  const [modal, setModal] = useState<boolean>(false);

  const onClickOpenModal = () => {
    setModal(true);
  };

  return (
    <>
      <InputWrapper>
        <MapInputContainer>
          <MapInputhWrapper activeOpacity={0.8} onPress={onClickOpenModal}>
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
      {modal ? (
        <LoactionSearch
          location={location}
          setLocation={setLocation}
          setModal={setModal}
        />
      ) : null}
    </>
  );
}
