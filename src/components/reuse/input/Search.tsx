import React from 'react';
import SearchImage from '../../../assets/image/reuse/search.png';
import {
  SearchButtonIcon,
  SearchInput,
  SearchWrapper,
  Wrapper,
} from '../../../styles/layout/reuse/input/Search';
import {TouchableOpacity} from 'react-native';
import {SearchProps} from '../../../interfaces/reuse/input/Search.interface';

export default function Search({placeholder, setSearch}: SearchProps) {
  const onSubmitSearch = () => {
    console.log('test');
  };

  const onChangeSearch = (str: string) => {
    setSearch(str);
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchInput placeholder={placeholder} onChangeText={onChangeSearch} />
        <TouchableOpacity onPress={onSubmitSearch}>
          <SearchButtonIcon source={SearchImage} />
        </TouchableOpacity>
      </SearchWrapper>
    </Wrapper>
  );
}