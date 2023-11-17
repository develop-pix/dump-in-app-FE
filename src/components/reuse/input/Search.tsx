import React from 'react';
import SearchImage from '../../../assets/image/reuse/search-grey.png';
import {
  SearchButtonIcon,
  SearchInput,
  SearchWrapper,
  Wrapper,
} from '../../../styles/layout/reuse/input/Search.style';
import {TouchableOpacity} from 'react-native';
import {SearchProps} from '../../../interfaces/reuse/input/Search.interface';

export default function Search({
  placeholder,
  setSearch,
  onSearchClick,
}: SearchProps) {
  const onChangeSearch = (str: string) => {
    setSearch(str);
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchInput placeholder={placeholder} onChangeText={onChangeSearch} />
        <TouchableOpacity onPress={onSearchClick}>
          <SearchButtonIcon source={SearchImage} />
        </TouchableOpacity>
      </SearchWrapper>
    </Wrapper>
  );
}
