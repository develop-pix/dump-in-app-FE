import React, {useEffect, useState} from 'react';
import {MapContainer} from '../../../styles/layout/location/Map.style';
import MapInput from './MapInput';
import NaverMapView, {Marker} from 'react-native-nmap';
import {MyLocation} from '../../../interfaces/Location.interface';
import Geolocation from 'react-native-geolocation-service';
import {Platform, PermissionsAndroid} from 'react-native';
import {getAddressFromNaverGeocoding} from '../../../hooks/axios/Location';

export default function Map() {
  const platform = Platform.OS;
  const [location, setLocation] = useState<string>('주소 입력');
  const [myPosition, setMyPosition] = useState<MyLocation>({
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

  // 처음 Location페이지로 이동시 권한 획득
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

  // 포지션 이동시 마다 ReverseGeolocation, PhotoboothData 부르기 호출
  useEffect(() => {
    GetAddressData(myPosition.latitude, myPosition.longitude);
    // GetBranchData(myPosition.latitude, myPosition.longitude);
  }, [myPosition.latitude, myPosition.longitude]);

  return (
    <MapContainer platform={platform}>
      <NaverMapView
        style={{width: '100%', height: '100%'}}
        showsMyLocationButton={true}
        center={{...myPosition, zoom: zoom}}
        onCameraChange={e => {
          setMyPosition({latitude: e.latitude, longitude: e.longitude});
          setZoom(e.zoom);
        }}
        maxZoomLevel={17}
        minZoomLevel={8}
        rotateGesturesEnabled={false}
        tiltGesturesEnabled={false}>
        <Marker coordinate={myPosition} />
      </NaverMapView>
      <MapInput location={location} />
    </MapContainer>
  );
}
