import { TouchableOpacity } from 'react-native';

import SearchGreyIcon from 'assets/image/icon/search_grey.svg';
import { SearchProps } from 'interfaces/reuse/input/Search.interface';
import { SearchButtonIconContainer, SearchInput, SearchWrapper, Wrapper } from 'styles/layout/reuse/input/Search.style';

export default function Search({ placeholder, search, setSearch, SubmitSearch }: SearchProps) {
    const onChangeSearch = (str: string) => {
        setSearch(str);
    };

    return (
        <Wrapper>
            <SearchWrapper>
                <SearchInput placeholder={placeholder} onChangeText={onChangeSearch} value={search} />
                <TouchableOpacity onPress={SubmitSearch}>
                    <SearchButtonIconContainer>
                        <SearchGreyIcon />
                    </SearchButtonIconContainer>
                </TouchableOpacity>
            </SearchWrapper>
        </Wrapper>
    );
}
