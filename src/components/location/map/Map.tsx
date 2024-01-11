import { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import NaverMapView, { Marker } from 'react-native-nmap';
import { useDispatch } from 'react-redux';

import { GetAddressFromNaverGeocoding, GetPhotoBoothData } from 'hooks/axios/Location';
import { setCurrentLocation } from 'hooks/redux/Location';
import { useAppSelector } from 'hooks/redux/store';
import { BranchCardData, LocationData } from 'interfaces/Location.interface';
import { MapContainer } from 'styles/layout/location/Map.style';
import { GetLocationAuthorization } from 'utils/GetLocation';

import BranchCarousel from './BranchCarousel';
import MapInput from './MapInput';
import ResetLocationButton from './ResetLocationButton';

export default function Map() {
    const currentLocation = useAppSelector(state => state.location);
    const dispatch = useDispatch();

    /** 대한민국 북,동,남,서 끝단의 위도 or 경도 */
    const MAX_COORD = [38.6111111, 131.8695555, 33.11194444, 124.61];
    const platform = Platform.OS;
    /** photoBoothID로 주변 포토부스 호출 null일시 모든 포토부스에 대하여 탐색 */
    const [location, setLocation] = useState<string>('주소 입력');
    /** 현재 내가 보고있는 지도의 center */
    const [myPosition, setMyPosition] = useState<LocationData>({
        latitude: 37.564362,
        longitude: 126.977011,
    });
    const [branchData, setBranchData] = useState<BranchCardData[]>([]);
    const [zoom, setZoom] = useState<number>(18);
    const [showNearBranch, setShowNearBranch] = useState<boolean>(false);
    const cardMoveY = useRef(new Animated.Value(0)).current;

    /**  ReverseGeolocation 호출 */
    const GetAddressData = async (latitude: number, longitude: number) => {
        const addressData = await GetAddressFromNaverGeocoding(latitude, longitude);
        setLocation(addressData);
    };

    /** branchData 데이터 얻기 호출 */
    const GetBranchData = async (latitude: number, longitude: number) => {
        const radius = 1.0;
        const photoBoothData = await GetPhotoBoothData(latitude, longitude, radius);
        setBranchData(photoBoothData.data);
    };

    /** 초기 위치 설정 */
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

    /**  대한민국 첫 끝단 넘어가면 카메라를 서울로 전환 */
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

    /**  처음 Location페이지로 이동시 권한 획득 , ReverseGeolocation 호출 */
    // TODO: 권한 거절 할시 어떻게 처리할지 고민 해야함
    useEffect(() => {
        let watch = -1;
        GetLocationAuthorization().then(result => {
            if (result === 'granted') {
                watch = GetCurrentLocation();
            }
        });

        // unmount시 위치 연결 해제
        return () => {
            if (watch === 0) {
                Geolocation.clearWatch(watch);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**  현재 화면위치 바뀔때마다 데이터 Branch 데이터 Get */
    useEffect(() => {
        if (myPosition.latitude && myPosition.longitude) {
            GetBranchData(myPosition.latitude, myPosition.longitude);
        }
    }, [myPosition.latitude, myPosition.longitude]);

    // 처음 렌더링시 지도 위치 할당 완료시 위치 획득
    useEffect(() => {
        if (currentLocation.latitude && currentLocation.longitude) {
            GetAddressData(currentLocation.latitude, currentLocation.longitude);
        }
    }, [currentLocation.latitude, currentLocation.longitude]);

    // 카드 및 ResetLocation 버튼 애니메이션 적용 , duration 수정하면 애니메이션 속도 수정 가능
    useEffect(() => {
        if (branchData.length > 0) {
            Animated.timing(cardMoveY, {
                toValue: showNearBranch ? -180 : -10,
                duration: 330,
                useNativeDriver: true,
            }).start();
        }
    }, [showNearBranch, cardMoveY, branchData]);

    return (
        <MapContainer platform={platform}>
            <NaverMapView
                style={{ width: '100%', height: '100%' }}
                center={{ ...myPosition, zoom }}
                onCameraChange={e => {
                    setZoom(e.zoom);
                    setMyPosition({ latitude: e.latitude, longitude: e.longitude });
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
                    <Marker coordinate={currentLocation} />
                ) : null}

                {branchData.length > 0
                    ? branchData.map(position => {
                          <Marker coordinate={position} pinColor="red" />;
                      })
                    : null}
            </NaverMapView>
            <MapInput location={location} />
            <Animated.View style={{ transform: [{ translateY: cardMoveY }] }}>
                <ResetLocationButton
                    GetCurrentLocation={GetCurrentLocation}
                    setMyPosition={setMyPosition}
                    setZoom={setZoom}
                />
                <BranchCarousel branchData={branchData} />
            </Animated.View>
        </MapContainer>
    );
}
