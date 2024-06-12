import { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import SearchNoData from 'components/reuse/alert/SearchNoData';
import { GetLocationSearchData } from 'hooks/axios/SearchLocation';
import { useAppSelector } from 'hooks/redux/store';
import { BranchData, SearchBranchListProps } from 'interfaces/Location.interface';
import { Divider, ListContainer, SearchBranchContainer } from 'styles/layout/location-search/Location.style';

import BranchList from './BranchList';

export default function SearchBranchList({ search, resultData, setResultData }: SearchBranchListProps) {
    const [dataEnd, setDataEnd] = useState(true);
    const [page, setPage] = useState(0);

    const searchLimit = 20;
    const currentLocation = useAppSelector(state => state.location);

    /** FlatList renderItem */
    const renderBranchListItem = useCallback(({ item }: { item: BranchData }) => {
        return (
            <ListContainer>
                <BranchList key={item.id} branchName={item.name} distance={item.distance} branchID={item.id} />
            </ListContainer>
        );
    }, []);

    /** FlatList onEndReached */
    const onEndReached = async () => {
        const newData = await GetLocationSearchData(
            search,
            currentLocation.latitude,
            currentLocation.longitude,
            1.5,
            searchLimit,
            searchLimit * page,
        );
        if (newData.data) {
            setPage(prev => prev + 1);
            setResultData(prevData => [...prevData, ...newData.data.results]);
            newData.data.next !== null && setDataEnd(prev => !prev);
        }
    };

    const renderItemSeparatorComponent = () => {
        return <Divider />;
    };

    // 검색어 입력시 0.2초 Debounce
    useEffect(() => {
        /** TODO: 자동 검색 , backend 수정후 API 수정 필요함 */
        const getSearchData = async (branchName: string) => {
            try {
                const searchData = await GetLocationSearchData(
                    branchName,
                    currentLocation.latitude,
                    currentLocation.longitude,
                    1.5,
                    searchLimit,
                    searchLimit * page,
                );
                setResultData(searchData.data.results);
            } catch (error) {
                console.log('getSearchDataError ' + error);
            }
        };

        if (search !== '') {
            const debounce = setTimeout(() => {
                getSearchData(search);
            }, 200);

            return () => {
                clearTimeout(debounce);
            };
        }
    }, [currentLocation.latitude, currentLocation.longitude, page, search, setResultData]);

    return (
        <SearchBranchContainer>
            {dataEnd ? (
                <FlatList
                    data={resultData}
                    keyExtractor={item => item.id}
                    renderItem={renderBranchListItem}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={renderItemSeparatorComponent}
                />
            ) : (
                <FlatList
                    data={resultData}
                    keyExtractor={item => item.id}
                    renderItem={renderBranchListItem}
                    onEndReached={onEndReached}
                    onEndReachedThreshold={0.1}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={renderItemSeparatorComponent}
                />
            )}
            {resultData.length === 0 && <SearchNoData alertText="검색 결과가 없습니다." recommendText="" />}
        </SearchBranchContainer>
    );
}
