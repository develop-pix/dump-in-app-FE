import { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import SearchNoData from 'components/reuse/alert/SearchNoData';
import { GetReviewLocationSearchData } from 'hooks/axios/SearchLocation';
import { BranchSearchData, ReviewSearchBranchListProps } from 'interfaces/ReviewLocationSearch.interface';
import { ListContainer, SearchBranchContainer } from 'styles/layout/review-location-search/ReviewLocationSearch.style';

import BranchList from './BranchList';

export default function ReviewSearchBranchList({ search, resultData, setResultData }: ReviewSearchBranchListProps) {
    const [dataEnd, setDataEnd] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    const searchLimit = 20;

    /** FlatList renderItem */
    const renderBranchListItem = useCallback(({ item }: { item: BranchSearchData }) => {
        return (
            <ListContainer>
                <BranchList name={item.name} branchID={item.id} />
            </ListContainer>
        );
    }, []);

    /** FlatList onEndReached */
    const onEndReached = async () => {
        const newData = await GetReviewLocationSearchData(search, searchLimit, searchLimit * page);
        if (newData.data) {
            setPage(prev => prev + 1);
            setResultData(prevData => [...prevData, ...newData.data.results]);
            newData.data.next !== null && setDataEnd(prev => !prev);
        }
    };

    // 검색어 입력시 0.2초 Debounce
    useEffect(() => {
        const getSearchData = async () => {
            try {
                const searchData = await GetReviewLocationSearchData(search, searchLimit, 0);
                if (searchData.data) {
                    setResultData(searchData.data.results);
                    searchData.data.next !== null && setDataEnd(prev => !prev);
                }
            } catch (error) {
                console.log('getSearchDataError ' + error);
            }
        };

        if (search !== '') {
            const debounce = setTimeout(() => {
                getSearchData();
            }, 200);

            return () => {
                clearTimeout(debounce);
            };
        }
    }, [search, setResultData]);

    return (
        <SearchBranchContainer>
            {dataEnd ? (
                <FlatList
                    data={resultData}
                    keyExtractor={item => item.id}
                    renderItem={renderBranchListItem}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <FlatList
                    data={resultData}
                    keyExtractor={item => item.id}
                    renderItem={renderBranchListItem}
                    onEndReached={onEndReached}
                    onEndReachedThreshold={0.1}
                    showsVerticalScrollIndicator={false}
                />
            )}
            {resultData.length === 0 && <SearchNoData alertText="검색 결과가 없습니다." recommendText="" />}
        </SearchBranchContainer>
    );
}
