import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import SearchNoData from 'components/reuse/alert/SearchNoData';
import GoBackButton from 'components/reuse/button/GoBackButton';
import Search from 'components/reuse/input/Search';
import { BranchData } from 'interfaces/Location.interface';
import { LocationSearchParamList, RootStackParam } from 'interfaces/NavigationBar';
import { SearchContainer, SearchForm } from 'styles/layout/location-search/Location.style';
import { GoBackButtonContainerWithSafeArea } from 'styles/layout/reuse/button/GoBackButton.style';

import SearchBranchList from './SearchBranchList';

export default function LocationSearchForm() {
    const platform = Platform.OS;
    const [search, setSearch] = useState<string>('');
    const [resultData, setResultData] = useState<BranchData[] | []>([]);
    const route = useRoute<RouteProp<LocationSearchParamList, 'locationSearchType'>>();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

    const tempData: BranchData[] = [
        {
            branchID: 1,
            branchName: '인생네컷 동대문 현대아울렛점',
            distance: '300m',
            address: '서울 중구 장충단로13길 20 1층',
        },
        {
            branchID: 2,
            branchName: '인생네컷 한양대점',
            distance: '450m',
            address: '서울 성동구 마조로 25',
        },
        {
            branchID: 3,
            branchName: '인생네컷 혜화로터리점',
            distance: '880m',
            address: '서울 종로구 대명길 42 1층 인생네컷',
        },
        {
            branchID: 4,
            branchName: '인생네컷 영등포 타임스퀘어점',
            distance: '999m',
            address: '서울 영등포구 영중로4길 17 1, 2층',
        },
        {
            branchID: 5,
            branchName: '인생네컷 광화문교보문고점',
            distance: '1.2km',
            address: '서울 종로구 자하문로2길 17-2 1층 인생네컷',
        },
        {
            branchID: 6,
            branchName: 'Test',
            distance: '999.9m',
            address: '서울 용산구 청파로45길 24',
        },
        {
            branchID: 7,
            branchName: 'Test2',
            distance: '119.9m',
            address: '서울 용산구 청파로47길 11',
        },
    ];

    const getSearchData = async (searchData: string) => {
        // 나중에 API 연결
        // const result = await getLocationData(search);
        setResultData(
            tempData.filter(data => {
                return data.branchName.indexOf(searchData) === 0;
            }),
        );
    };

    // 진입한 페이지가 지도검색일경우 BranchDetail로 ReviewNew일경우 ReviewNew로 돌아감
    const SearchBranch = () => {
        // 나중에 API 연결

        if (search !== '' && resultData.length !== 0) {
            if (route.params.NextPage === 'BranchDetail') {
                navigation.pop();
                navigation.push('Branch', {
                    branchID: resultData[0].branchID,
                });
            } else if (route.params.NextPage === 'ReviewNew') {
                navigation.pop();
                navigation.push('ReviewNew', {
                    branchID: resultData[0].branchID,
                });
            }
        }
    };

    useEffect(() => {
        if (search !== '') {
            getSearchData(search);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    return (
        <SearchForm>
            <SearchContainer>
                <GoBackButtonContainerWithSafeArea platform={platform}>
                    <GoBackButton />
                </GoBackButtonContainerWithSafeArea>
                <Search
                    placeholder="포토부스, 주소 검색"
                    search={search}
                    setSearch={setSearch}
                    SubmitSearch={SearchBranch}
                />
                {search === '' ? null : resultData.length !== 0 ? (
                    <SearchBranchList data={resultData} />
                ) : (
                    <SearchNoData alertText="검색 결과가 없습니다." recommendText="" />
                )}
            </SearchContainer>
        </SearchForm>
    );
}
