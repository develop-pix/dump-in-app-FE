import { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import NaverMapView, { Marker } from 'react-native-nmap';
import { useDispatch } from 'react-redux';

import { GetAddressFromNaverGeocoding, GetBranchCardList } from 'hooks/axios/Location';
import { setCurrentLocation } from 'hooks/redux/currentLocationSlice';
import { useAppSelector } from 'hooks/redux/store';
import { BranchCardData, LocationData } from 'interfaces/Location.interface';
import { NoBranchContainer, NoBranchToastContainer } from 'styles/layout/location/BranchCarousel.style';
import { MapContainer } from 'styles/layout/location/Map.style';
import { FontWhiteSmallerSemibold } from 'styles/layout/reuse/text/Text.style';
import { GetLocationAuthorization } from 'utils/GetLocation';

import BranchCarousel from './BranchCarousel';
import MapInput from './MapInput';
import ResetLocationButton from './ResetLocationButton';

export default function Map() {
    const currentLocation = useAppSelector(state => state.location);
    const dispatch = useDispatch();
    const platform = Platform.OS;
    const cardMoveY = useRef(new Animated.Value(0)).current;

    const [location, setLocation] = useState<string>('주소 입력');
    const [branchData, setBranchData] = useState<BranchCardData[]>([]);
    const [zoom, setZoom] = useState<number>(18);
    const [showNearBranch, setShowNearBranch] = useState<boolean>(false);
    const [toastVisible, setToastVisible] = useState<boolean>(false);

    /** 대한민국 북,동,남,서 끝단의 위도 or 경도 */
    const MAX_COORD = [38.6111111, 131.8695555, 33.11194444, 124.61];
    /** 현재 내가 보고있는 지도의 center */
    const [myPosition, setMyPosition] = useState<LocationData>({
        latitude: 37.564362,
        longitude: 126.977011,
    });

    /**  ReverseGeolocation 호출 */
    const getAddressData = async (latitude: number, longitude: number) => {
        const addressData = await GetAddressFromNaverGeocoding(latitude, longitude);
        setLocation(addressData);
    };

    /** BranchCard 정보 Get */
    const getBranchCardData = async (latitude: number, longitude: number) => {
        const radius = 1.0;
        try {
            const photoBoothData = await GetBranchCardList(latitude, longitude, radius);
            if (photoBoothData.data) {
                setBranchData(photoBoothData.data);
            }
        } catch (error) {
            console.log('GetBranchCardDataError ' + error);
        }
    };

    const ChangePosition = (latitude: number, longitude: number) => {
        setMyPosition({ ...myPosition, latitude, longitude });
    };

    /** 위치 권한 획득 시 redux store에 저장 */
    const getCurrentLocation = () => {
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

    /**  Max_COORD 넘어갈시 Map 위치를 서울로 전환 */
    const ResetCameraPosition = useCallback(
        (latitude: number, longitude: number) => {
            if (currentLocation.latitude && currentLocation.longitude) {
                if (longitude > MAX_COORD[0] || latitude < MAX_COORD[2]) {
                    currentLocation.latitude && currentLocation.longitude
                        ? setMyPosition({
                              latitude: currentLocation.latitude,
                              longitude: currentLocation.longitude,
                          })
                        : setMyPosition({ latitude: 37.564362, longitude: 126.977011 });
                } else if (longitude > MAX_COORD[1] || longitude < MAX_COORD[3]) {
                    currentLocation.latitude && currentLocation.longitude
                        ? setMyPosition({
                              latitude: currentLocation.latitude,
                              longitude: currentLocation.longitude,
                          })
                        : setMyPosition({ latitude: 37.564362, longitude: 126.977011 });
                }
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    // LocationSearch 페이지로 이동시 위치 권한 획득
    useEffect(() => {
        let watch = -1;
        GetLocationAuthorization().then(result => {
            if (result === 'granted') {
                watch = getCurrentLocation();
            }
        });

        return () => {
            if (watch === 0) {
                Geolocation.clearWatch(watch);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 현재 화면위치 바뀔때마다 지점 데이터 Get
    useEffect(() => {
        if (myPosition.latitude && myPosition.longitude) {
            getBranchCardData(myPosition.latitude, myPosition.longitude);
        }
        if (Object.keys(branchData).length === 0) {
            setToastVisible(true);
        }
        const toastTime = setTimeout(() => {
            setToastVisible(false);
        }, 2000);
        return () => clearTimeout(toastTime);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myPosition.latitude, myPosition.longitude]);

    //  카드 및 ResetLocation 버튼 애니메이션 적용 , duration 수정하면 애니메이션 속도 수정 가능
    useEffect(() => {
        if (branchData.length > 0) {
            Animated.timing(cardMoveY, {
                toValue: showNearBranch ? -180 : -10,
                duration: 330,
                useNativeDriver: true,
            }).start();
        }
    }, [showNearBranch, cardMoveY, branchData]);

    // 내 위치가 바뀔때마다. ReverseGeolocation 호출
    useEffect(() => {
        if (currentLocation.latitude && currentLocation.longitude) {
            getAddressData(currentLocation.latitude, currentLocation.longitude);
        }
    }, [currentLocation.latitude, currentLocation.longitude]);

    return (
        <MapContainer platform={platform}>
            <NaverMapView
                style={{ width: '100%', height: '100%' }}
                center={{ ...myPosition, zoom }}
                onCameraChange={e => {
                    setZoom(e.zoom);
                    ChangePosition(e.latitude, e.longitude);
                    ResetCameraPosition(e.latitude, e.longitude);
                    setShowNearBranch(false);
                }}
                onMapClick={() => {
                    setShowNearBranch(true);
                }}
                showsMyLocationButton={false}
                scaleBar={false}
                zoomControl={false}
                maxZoomLevel={20}
                minZoomLevel={8}
                rotateGesturesEnabled={false}
                tiltGesturesEnabled={false}>
                {currentLocation.latitude !== null && currentLocation.longitude !== null ? (
                    <Marker coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude }} />
                ) : null}

                {branchData.length > 0
                    ? branchData.map(position => {
                          <Marker
                              coordinate={{ latitude: position.latitude, longitude: position.longitude }}
                              pinColor="red"
                          />;
                      })
                    : null}
            </NaverMapView>
            <MapInput location={location} />
            {branchData.length > 0 ? (
                <Animated.View style={{ transform: [{ translateY: cardMoveY }] }}>
                    <ResetLocationButton
                        GetCurrentLocation={getCurrentLocation}
                        setMyPosition={setMyPosition}
                        setZoom={setZoom}
                    />
                    <BranchCarousel branchData={branchData} />
                </Animated.View>
            ) : (
                <NoBranchContainer>
                    {toastVisible && (
                        <NoBranchToastContainer>
                            <FontWhiteSmallerSemibold>내 주변 검색 결과가 없습니다.</FontWhiteSmallerSemibold>
                        </NoBranchToastContainer>
                    )}
                    <ResetLocationButton
                        GetCurrentLocation={getCurrentLocation}
                        setMyPosition={setMyPosition}
                        setZoom={setZoom}
                    />
                </NoBranchContainer>
            )}
        </MapContainer>
    );
}
