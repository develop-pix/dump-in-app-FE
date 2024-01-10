import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export const GetLocationAuthorization = async () => {
    const platform = Platform.OS;
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
