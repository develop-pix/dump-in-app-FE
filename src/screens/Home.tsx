import { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';

import HomeForm from 'components/home/HomeForm';
import { HomeSafeContainer } from 'styles/layout/home/Home.style';

export default function Home() {
    const firebaseMessaging = messaging();

    useEffect(() => {
        const androidRequestPermission = async () => {
            try {
                const authorizationStatus = await messaging().requestPermission();
                if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
                    const fcmToken = await firebaseMessaging.getToken();
                    if (Platform.OS === 'android') {
                        if (Platform.Version >= 33) {
                            const granted = await PermissionsAndroid.request(
                                PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
                            );
                            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                                if (fcmToken) {
                                    console.log(fcmToken);
                                    console.log('1111');
                                    //  토큰 저장
                                }
                            }
                        } else {
                            if (fcmToken) {
                                console.log(fcmToken);
                                console.log(Platform.Version);
                                //  토큰 저장
                            }
                        }
                    }
                }
            } catch (error) {
                console.log('Android error:', error);
            }
        };

        const iOSRequestPermission = async () => {
            try {
                const authorizationStatus = await messaging().requestPermission();
                if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
                    await firebaseMessaging.registerDeviceForRemoteMessages();
                    const apnsToken = await firebaseMessaging.getAPNSToken();
                    if (apnsToken) {
                        const fcmToken = await firebaseMessaging.getToken();
                        if (fcmToken) {
                            console.log(fcmToken);
                            //  토큰 저장
                        }
                    }
                }
            } catch (error) {
                console.log('iOS error:', error);
            }
        };

        Platform.OS === 'android' ? androidRequestPermission() : iOSRequestPermission();
    }, [firebaseMessaging]);

    return (
        <HomeSafeContainer>
            <HomeForm />
        </HomeSafeContainer>
    );
}
