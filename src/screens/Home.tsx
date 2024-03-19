import { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';

import HomeForm from 'components/home/HomeForm';
import { sendTokenToServer } from 'hooks/axios/PushNotification';
import { storage } from 'hooks/mmkv/storage';
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
                                    sendTokenToServer(fcmToken);
                                    storage.set('mobileToken', fcmToken);
                                }
                            }
                        } else {
                            if (fcmToken) {
                                sendTokenToServer(fcmToken);
                                storage.set('mobileToken', fcmToken);
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
                    const apnsToken = await firebaseMessaging.getAPNSToken();
                    if (apnsToken) {
                        const fcmToken = await firebaseMessaging.getToken();
                        if (fcmToken) {
                            sendTokenToServer(fcmToken);
                            storage.set('mobileToken', fcmToken);
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
