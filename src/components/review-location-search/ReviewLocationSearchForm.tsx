import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import { useDispatch } from 'react-redux';

import GoBackButton from 'components/reuse/button/GoBackButton';
import Search from 'components/reuse/input/Search';
import { setCurrentLocation } from 'hooks/redux/currentLocationSlice';
import { setBranchID, setBranchName } from 'hooks/redux/reviewEditSlice';
import { RootStackScreenProps } from 'interfaces/Navigation.interface';
import { BranchSearchData } from 'interfaces/ReviewLocationSearch.interface';
import { HeaderLeftContainer } from 'styles/layout/reuse/header/Header.style';
import { SearchContainer, SearchForm } from 'styles/layout/review-location-search/ReviewLocationSearch.style';
import { GetLocationAuthorization } from 'utils/GetLocation';

import SearchBranchList from './ReviewSearchBranchList';

export default function ReviewLocationSearchForm() {
    const dispatch = useDispatch();
    const navigation = useNavigation<RootStackScreenProps<'ReviewLocationSearch'>['navigation']>();

    const [search, setSearch] = useState<string>('');
    const [resultData, setResultData] = useState<BranchSearchData[]>([]);

    const routes = navigation.getState().routes;
    const previousRouteName = routes[routes.length - 2].name;

    const searchBranch = () => {
        if (search !== '' && resultData.length !== 0) {
            if (previousRouteName === 'AddReviewModal') {
                navigation.navigate('AddReviewModal', { branchID: resultData[0].id });
            } else if (previousRouteName === 'ReviewEdit') {
                dispatch(setBranchID(resultData[0].id));
                dispatch(setBranchName(resultData[0].name));
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
