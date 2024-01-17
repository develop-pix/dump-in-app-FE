import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Geolocation from 'react-native-geolocation-service';
import { useDispatch } from 'react-redux';

import GoBackButton from 'components/reuse/button/GoBackButton';
import Search from 'components/reuse/input/Search';
import { GetLocationSearchData } from 'hooks/axios/SearchLocation';
import { setCurrentLocation } from 'hooks/redux/Location';
import { useAppSelector } from 'hooks/redux/store';
import { BranchData } from 'interfaces/Location.interface';
import { LocationSearchParamList, RootStackParam, ScreenName } from 'interfaces/NavigationBar';
import { SearchContainer, SearchForm } from 'styles/layout/location-search/Location.style';
import { GoBackButtonContainerWithSafeArea } from 'styles/layout/reuse/button/GoBackButton.style';
import { GetLocationAuthorization } from 'utils/GetLocation';

import SearchBranchList from './SearchBranchList';

export default function LocationSearchForm() {
    const dispatch = useDispatch();
    const currentLocation = useAppSelector(state => state.location);
    const platform = Platform.OS;
    const [search, setSearch] = useState<string>('');
    const [resultData, setResultData] = useState<BranchData[] | []>([]);
    const route = useRoute<RouteProp<LocationSearchParamList, 'locationSearchType'>>();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

    /** TODO: 자동 검색 , backend 수정후 API 수정 필요함 */
    const getSearchData = async (branchName: string) => {
        const searchData = await GetLocationSearchData(
            branchName,
            currentLocation.latitude,
            currentLocation.longitude,
            1.5,
        );
        setResultData(searchData.data);
    };

    /**  검색 버튼 클릭, 진입한 페이지가 Map일경우 Branch, ReviewNew or ReviewEdit일경우 해당 페이지로 돌아감 */
    //TODO: ReviewEdit 진입시 ReviewNew로 돌아가는것 같은데 추후 확인 필요
    const SearchBranch = () => {
        // 나중에 API 연결
        const currentScreen = (route.params as { screen: ScreenName }).screen;
        if (search !== '' && resultData.length !== 0) {
            if (route.params.NextPage === 'BranchDetail') {
                navigation.pop();
                navigation.push('Branch', {
                    branchID: resultData[0].id,
                    screen: 'Location',
                });
            } else if (route.params.NextPage === 'ReviewNew') {
                navigation.pop();
                navigation.push('ReviewNew', {
                    branchID: resultData[0].id,
                    screen: currentScreen,
                });
            }
        }
    };

    /** 위치 권한 획득 시 redux store에 저장 */
    const GetCurrentLocation = () => {
        const watchID = Geolocation.watchPosition(
            position => {
                dispatch(
                    setCurrentLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude }),
                );
            },
            error => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true },
        );

        return watchID;
    };

    // LocationSearch 페이지로 이동시 위치 권한 획득
    useEffect(() => {
        let watch = -1;
        GetLocationAuthorization()
            .then(result => {
                if (result === 'granted') {
                    watch = GetCurrentLocation();
                }
            })
            .catch(e => {
                console.log(e);
            });

        return () => {
            if (watch === 0) {
                Geolocation.clearWatch(watch);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 검색어 입력시 0.2초 Debounce
    useEffect(() => {
        if (search !== '') {
            const debounce = setTimeout(() => {
                getSearchData(search);
            }, 200);

            return () => {
                clearTimeout(debounce);
            };
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
                {search === '' ? null : <SearchBranchList data={resultData} />}
            </SearchContainer>
        </SearchForm>
    );
}
