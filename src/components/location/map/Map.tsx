import { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import NaverMapView, { Marker } from 'react-native-nmap';

import { GetAddressFromNaverGeocoding, GetPhotoBoothData } from 'hooks/axios/Location';
import { LocationData } from 'interfaces/Location.interface';
import { MapContainer } from 'styles/layout/location/Map.style';

import BranchCarousel from './BranchCarousel';
import MapInput from './MapInput';
import ResetLocationButton from './ResetLocationButton';

export default function Map() {
    /** 대한민국 북,동,남,서 끝단의 위도 or 경도 */
    const MAX_COORD = [38.6111111, 131.8695555, 33.11194444, 124.61];
    const platform = Platform.OS;
    // photoBoothID로 주변 포토부스 호출 null일시 모든 포토부스에 대하여 탐색
    const [location, setLocation] = useState<string>('주소 입력');
    // 현재 내가 보고있는 지도의 center
    const [myPosition, setMyPosition] = useState<LocationData>({
        latitude: 37.564362,
        longitude: 126.977011,
    });
    // 현재 내위치
    const [currentPosition, setCurrentPosition] = useState<LocationData>({
        latitude: 37.564362,
        longitude: 126.977011,
    });
    const [pinPosition, setPinPosition] = useState<LocationData[]>([]);
    const [zoom, setZoom] = useState<number>(18);
    const [showNearBranch, setShowNearBranch] = useState<boolean>(false);
    const cardMoveY = useRef(new Animated.Value(0)).current;

    /** 초기 위치 설정 */
    const GetLocation = () => {
        const watchID = Geolocation.watchPosition(
            position => {
                setCurrentPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                setMyPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            error => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true },
        );

        return watchID;
    };

    const GetAddressData = async (latitude: number, longitude: number) => {
        // ReverseGeolocation 호출
        const addressData = await GetAddressFromNaverGeocoding(latitude, longitude);
        setLocation(addressData);
    };

    // branchData 데이터 얻기 호출
    const GetBranchData = async (latitude: number, longitude: number) => {
        const radius = 1.0;
        const photoBoothData = await GetPhotoBoothData(latitude, longitude, radius);
        console.log(photoBoothData);
        setPinPosition([]);
    };

    // 대한민국 첫 끝단 넘어가면 카메라를 서울로 전환
    const ResetCameraPosition = useCallback(
        (latitude: number, longitude: number) => {
            if (latitude > MAX_COORD[0] || latitude < MAX_COORD[2]) {
                setMyPosition(myPosition);
            } else if (longitude > MAX_COORD[1] || longitude < MAX_COORD[3]) {
                setMyPosition(myPosition);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    const GetAuthorization = async () => {
        try {
            switch (platform) {
                case 'ios':
                    return await Geolocation.requestAuthorization('whenInUse');
                case 'android':
                    return await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
                default:
            }
        } catch (e) {
            console.log(e);
        }
    };

    // 처음 Location페이지로 이동시 권한 획득 , ReverseGeolocation 호출
    useEffect(() => {
        let watch = -1;
        GetAuthorization().then(result => {
            if (result === 'granted') {
                watch = GetLocation();
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

    // 처음 렌더링시 지도 위치 할당 완료시 위치 획득
    useEffect(() => {
        if (myPosition.latitude && myPosition.longitude) {
            GetAddressData(myPosition.latitude, myPosition.longitude);
            GetBranchData(myPosition.latitude, myPosition.longitude);
        }
    }, [myPosition.latitude, myPosition.longitude]);

    // 카드 및 ResetLocation 버튼 애니메이션 적용 , duration 수정하면 애니메이션 속도 수정 가능
    useEffect(() => {
        Animated.timing(cardMoveY, {
            toValue: showNearBranch ? 20 : 200,
            duration: 330,
            useNativeDriver: true,
        }).start();
    }, [showNearBranch, cardMoveY]);

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
                <Marker coordinate={currentPosition} />
                <Marker coordinate={myPosition} pinColor="yellow" />
                {pinPosition.map(branchPosition => {
                    <Marker coordinate={branchPosition} pinColor="red" />;
                })}
            </NaverMapView>
            <MapInput location={location} />
            <Animated.View style={{ transform: [{ translateY: cardMoveY }] }}>
                <ResetLocationButton GetAuthorization={GetAuthorization} GetLocation={GetLocation} setZoom={setZoom} />
                <BranchCarousel showNearBranch={showNearBranch} />
            </Animated.View>
        </MapContainer>
    );
}
