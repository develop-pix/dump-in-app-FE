import React from 'react';
import SearchGreyIcon from '../../../assets/image/icon/search_grey.svg';
import {
  SearchButtonIconContainer,
  SearchInput,
  SearchWrapper,
  Wrapper,
} from '../../../styles/layout/reuse/input/Search.style';
import {TouchableOpacity} from 'react-native';
import {SearchProps} from '../../../interfaces/reuse/input/Search.interface';

export default function Search({
  placeholder,
  search,
  setSearch,
  SubmitSearch,
}: SearchProps) {
  const onChangeSearch = (str: string) => {
    setSearch(str);
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchInput
          placeholder={placeholder}
          onChangeText={onChangeSearch}
          value={search}
        />
        <TouchableOpacity onPress={SubmitSearch}>
          <SearchButtonIconContainer>
            <SearchGreyIcon />
          </SearchButtonIconContainer>
        </TouchableOpacity>
      </SearchWrapper>
    </Wrapper>
  );
}
