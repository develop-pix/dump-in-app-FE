import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import { useDispatch } from 'react-redux';

import GoBackButton from 'components/reuse/button/GoBackButton';
import Search from 'components/reuse/input/Search';
import { setCurrentLocation } from 'hooks/redux/currentLocationSlice';
import { BranchData } from 'interfaces/Location.interface';
import { LocationStackScreenProps } from 'interfaces/Navigation.interface';
import { SearchContainer, SearchForm } from 'styles/layout/location-search/Location.style';
import { HeaderLeftContainer } from 'styles/layout/reuse/header/Header.style';
import { GetLocationAuthorization } from 'utils/GetLocation';

import SearchBranchList from './SearchBranchList';

export default function LocationSearchForm() {
    const dispatch = useDispatch();
    const navigation = useNavigation<LocationStackScreenProps<'LocationSearch'>['navigation']>();

    const [search, setSearch] = useState<string>('');
    const [resultData, setResultData] = useState<BranchData[] | []>([]);

    const searchBranch = () => {
        if (search !== '' && resultData.length !== 0) {
            navigation.navigate('MainTab', {
                screen: 'LocationTab',
                params: { screen: 'Branch', params: { branchID: resultData[0].id } },
            });
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

    return (
        <SearchForm>
            <SearchContainer>
                <Search
                    placeholder="포토부스, 주소 검색"
                    search={search}
                    setSearch={setSearch}
                    submitSearch={searchBranch}
                />
                {search === '' ? null : (
                    <SearchBranchList search={search} resultData={resultData} setResultData={setResultData} />
                )}
            </SearchContainer>
        </SearchForm>
    );
}
