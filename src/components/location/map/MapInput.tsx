import React, {useState} from 'react';
import {
  BlockInput,
  InputWrapper,
  MapInputhWrapper,
  InputForm,
} from '../../../styles/layout/location/Map.style';
import SearchImage from '../../../assets/image/reuse/search.png';
import {MapInputProps} from '../../../interfaces/Location.interface';
import LoactionSearch from '../search/LoactionSearch';
import {SearchButtonIcon} from '../../../styles/layout/reuse/input/Search';

export default function MapInput({location, setLocation}: MapInputProps) {
  const [modal, setModal] = useState<boolean>(false);

  const onClickOpenModal = () => {
    setModal(true);
  };

  return (
    <>
      <InputWrapper>
        <InputForm>
          <MapInputhWrapper activeOpacity={0.8} onPress={onClickOpenModal}>
            <BlockInput
              value={location}
              editable={false}
              selectTextOnFocus={false}
            />
            <SearchButtonIcon source={SearchImage} />
          </MapInputhWrapper>
        </InputForm>
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
