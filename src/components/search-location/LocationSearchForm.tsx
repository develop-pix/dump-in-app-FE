import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import { useDispatch } from 'react-redux';

import GoBackButton from 'components/reuse/button/GoBackButton';
import Search from 'components/reuse/input/Search';
import { GetLocationSearchData } from 'hooks/axios/SearchLocation';
import { setCurrentLocation } from 'hooks/redux/Location';
import { useAppSelector } from 'hooks/redux/store';
import { BranchData } from 'interfaces/Location.interface';
import { RootStackScreenProps } from 'interfaces/Navigation.interface';
import { SearchContainer, SearchForm } from 'styles/layout/location-search/Location.style';
import { HeaderLeftContainer } from 'styles/layout/reuse/header/Header.style';
import { GetLocationAuthorization } from 'utils/GetLocation';

import SearchBranchList from './SearchBranchList';

export default function LocationSearchForm() {
    const dispatch = useDispatch();
    const currentLocation = useAppSelector(state => state.location);
    const navigation = useNavigation<RootStackScreenProps<'LocationSearch'>['navigation']>();

    const [search, setSearch] = useState<string>('');
    const [resultData, setResultData] = useState<BranchData[] | []>([]);

    const routes = navigation.getState().routes;
    const previousRouteName = routes[routes.length - 2].name;

    const searchBranch = () => {
        // FIXME: ReviewEdit 예외처리 되어있지 않음, 전체적으로 param 보다 전역 상태 관리로 하는 것이 깔끔해 보임
        // 검색된 지점 클릭, 진입한 페이지가 Map일 경우 Branch, ReviewNew or ReviewEdit일 경우 해당 페이지로 돌아감
        // 나중에 API 연결
        if (search !== '' && resultData.length !== 0) {
            if (previousRouteName === 'MainTab') {
                navigation.navigate('MainTab', {
                    screen: 'LocationTab',
                    params: { screen: 'Branch', params: { branchID: resultData[0].id } },
                });
            } else if (previousRouteName === 'AddReviewModal') {
                navigation.navigate('AddReviewModal', { branchID: resultData[0].id });
            } else if (previousRouteName === 'ReviewEdit') {
                navigation.goBack();
            }
        }
    };

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <HeaderLeftContainer>
                        <GoBackButton />
                    </HeaderLeftContainer>
                );
            },
        });
    }, [navigation]);

    // LocationSearch 페이지로 이동시 위치 권한 획득
    useEffect(() => {
        let watch = -1;

        /** 위치 권한 획득 시 redux store에 저장 */
        const getCurrentLocation = () => {
            const watchID = Geolocation.watchPosition(
                position => {
                    dispatch(
                        setCurrentLocation({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        }),
                    );
                },
                error => {
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true },
            );

            return watchID;
        };

        GetLocationAuthorization()
            .then(result => {
                if (result === 'granted') {
                    watch = getCurrentLocation();
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
    }, [dispatch]);

    // 검색어 입력시 0.2초 Debounce
    useEffect(() => {
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

        if (search !== '') {
            const debounce = setTimeout(() => {
                getSearchData(search);
            }, 200);

            return () => {
                clearTimeout(debounce);
            };
        }
    }, [currentLocation.latitude, currentLocation.longitude, search]);

    return (
        <SearchForm>
            <SearchContainer>
                <Search
                    placeholder="포토부스, 주소 검색"
                    search={search}
                    setSearch={setSearch}
                    submitSearch={searchBranch}
                />
                {search === '' ? null : <SearchBranchList data={resultData} />}
            </SearchContainer>
        </SearchForm>
    );
}
