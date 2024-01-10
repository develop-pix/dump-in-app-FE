import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import SearchNoData from 'components/reuse/alert/SearchNoData';
import GoBackButton from 'components/reuse/button/GoBackButton';
import Search from 'components/reuse/input/Search';
import { BranchData } from 'interfaces/Location.interface';
import { LocationSearchParamList, RootStackParam, ScreenName } from 'interfaces/NavigationBar';
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
            branchID: '1',
            branchName: '인생네컷 동대문 현대아울렛점',
            distance: '300m',
        },
        {
            branchID: '2',
            branchName: '인생네컷 한양대점',
            distance: '450m',
        },
        {
            branchID: '3',
            branchName: '인생네컷 혜화로터리점',
            distance: '880m',
        },
        {
            branchID: '4',
            branchName: '인생네컷 영등포 타임스퀘어점',
            distance: '999m',
        },
        {
            branchID: '5',
            branchName: '인생네컷 광화문교보문고점',
            distance: '1.2km',
        },
        {
            branchID: '6',
            branchName: 'Test',
            distance: '999.9m',
        },
        {
            branchID: '7',
            branchName: 'Test2',
            distance: '119.9m',
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
        const currentScreen = (route.params as { screen: ScreenName }).screen;
        if (search !== '' && resultData.length !== 0) {
            if (route.params.NextPage === 'BranchDetail') {
                navigation.pop();
                navigation.push('Branch', {
                    branchID: resultData[0].branchID,
                    screen: 'Location',
                });
            } else if (route.params.NextPage === 'ReviewNew') {
                navigation.pop();
                navigation.push('ReviewNew', {
                    branchID: resultData[0].branchID,
                    screen: currentScreen,
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
