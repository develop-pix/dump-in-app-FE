import React, {useCallback, useEffect, useState} from 'react';
import {MapContainer} from '../../../styles/layout/location/Map.style';
import MapInput from './MapInput';
import NaverMapView, {Marker} from 'react-native-nmap';
import {MyLocation} from '../../../interfaces/Location.interface';
import Geolocation from 'react-native-geolocation-service';
import {Platform, PermissionsAndroid} from 'react-native';
import {getAddressFromNaverGeocoding} from '../../../hooks/axios/Location';

export default function Map() {
  //대한민국 북,동,남,서 끝단의 위도 or 경도
  const MAX_COORD = [38.6111111, 131.8695555, 33.11194444, 124.61];
  const platform = Platform.OS;
  const [location, setLocation] = useState<string>('주소 입력');
  const [myPosition, setMyPosition] = useState<MyLocation>({
    latitude: 37.564362,
    longitude: 126.977011,
  });
  const [pinPosition, setPinPosition] = useState<MyLocation>({
    latitude: 37.564362,
    longitude: 126.977011,
  });
  const [zoom, setZoom] = useState<number>(17);

  // 초기 위치 설정
  const GetLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setMyPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  // ReverseGeolocation 호출
  const GetAddressData = async (latitude: number, longitude: number) => {
    const addressData = await getAddressFromNaverGeocoding(latitude, longitude);
    setLocation(addressData);
  };

  //branchData 데이터 얻기 호출
  /*
  const GetBranchData = async (latitude: number, longitude: number) => {
    const photoboothData = await GetPhotoBoothData(latitude, longitude);
    setPhotoboothData(photoboothData);
  };
  */

  //대한민국 첫 끝단 넘어가면 카메라를 서울로 전환
  const ResetCameraPosition = useCallback(
    (latitude: number, longitude: number) => {
      if (latitude > MAX_COORD[0] || latitude < MAX_COORD[2]) {
        setPinPosition(myPosition);
      } else if (longitude > MAX_COORD[1] || longitude < MAX_COORD[3]) {
        setPinPosition(myPosition);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  // 처음 Location페이지로 이동시 권한 획득 , ReverseGeolocation 호출
  useEffect(() => {
    switch (platform) {
      case 'ios':
        Geolocation.requestAuthorization('whenInUse');
        break;
      case 'android':
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        break;
      default:
        return;
    }
    GetLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 처음 렌더링시 지도 위치 할당 완료시 위치 획득
  useEffect(() => {
    if (myPosition.latitude && myPosition.longitude) {
      GetAddressData(myPosition.latitude, myPosition.longitude);
    }
  }, [myPosition.latitude, myPosition.longitude]);

  // 카메라 이동시 마다 PhotoboothData 부르기 호출
  useEffect(() => {
    // GetBranchData(pinPosition.latitude, pinPosition.longitude);
  }, [pinPosition.latitude, pinPosition.longitude]);

  return (
    <MapContainer platform={platform}>
      <NaverMapView
        style={{width: '100%', height: '100%'}}
        showsMyLocationButton={true}
        center={{...pinPosition, zoom: zoom}}
        onCameraChange={e => {
          setZoom(e.zoom);
          setPinPosition({latitude: e.latitude, longitude: e.longitude});
          ResetCameraPosition(e.latitude, e.longitude);
        }}
        scaleBar={false}
        zoomControl={false}
        maxZoomLevel={17}
        minZoomLevel={8}
        rotateGesturesEnabled={false}
        tiltGesturesEnabled={false}>
        <Marker coordinate={myPosition} />
        <Marker coordinate={pinPosition} pinColor="red" />
      </NaverMapView>
      <MapInput location={location} />
    </MapContainer>
  );
}
